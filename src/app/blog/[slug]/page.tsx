import React from "react";
import { client } from "../../../sanity/lib/client"; // Assumi che sia il percorso corretto al tuo client di Sanity
import ArticleDetail from "../../../../src/app/_components/BlogComponents/ArticleDetail";
import MiddlePart from "../../../../src/app/_components/BlogComponents/CategoryButtons";

import BlogCategory from "../../../../src/app/_components/BlogComponents/BlogCategory";
import ArticlesGrid from "@/app/_components/BlogComponents/ArticlesGrid";

const getBlogPost = async (slug: any) => {
  const query = `*[_type == "post" && slug.current == $slug] {
    _id,
    title,
    fullPostContent,
    shortDescription,
    "author": {
      "name": author->name,
      "imageUrl": author->image.asset->url
    },
    categories[]->{
      title,
      _id
    },
    slug,
    "imageUrl": mainImage.asset->url,
    "authorImage": author->image.asset->url,
    "postUrl": "/blog/" + slug.current
  }`;

  const params = { slug };
  const blogPost = await client.fetch(query, params);
  return blogPost[0];
};

const getRelatedArticles = async (categoryId: any) => {
  const query = `*[_type == "post" && references($categoryId)] | order(_createdAt desc) [0...3] {
    _id,
    title,
    "imageUrl": mainImage.asset->url,
  
  }`;
  const params = { categoryId };
  const relatedArticles = await client.fetch(query, params);
  return relatedArticles;
};

const getCategory = async (slug: any) => {
  const query = `*[_type == "category" && slug.current == $slug] {
    title,
    description,
    _id,
    slug
    "postUrl": "/blog/" + slug.current
  }`;
  const params = { slug };
  const category = await client.fetch(query, params);
  return category[0];
};

const getCategorizedArticle = async (slug: any) => {
  const query = `*[_type == "post" && references($slug)] {
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    "postUrl": "/blog/" + slug.current
  }`;
  const params = { slug };
  const articles = await client.fetch(query, params);
  return articles;
};

export default async function SubBlog({ params }: any) {
  let content;
  const blogPost = await getBlogPost(params.slug);

  if (blogPost && blogPost._id) {
    // Se abbiamo trovato un post, mostralo con i suoi articoli correlati
    const relatedArticles = await getRelatedArticles(blogPost.categories);
    content = (
      <>
        <ArticleDetail articles={blogPost} />
        <MiddlePart categories={blogPost.categories} />
        <hr className="max-w-5xl w-full" />
        <ArticlesGrid
          articles={relatedArticles}
          category={blogPost.categories}
        ></ArticlesGrid>
      </>
    );
  } else {
    // Se il post non è stato trovato, prova con le categorie
    const category = await getCategory(params.slug);
    if (category && category._id) {
      const categorizedArticles = await getCategorizedArticle(category._id);
      content = (
        <BlogCategory articles={categorizedArticles} categorie={category} />
      );
    } else {
      // Se non abbiamo trovato né un post né una categoria, mostra un messaggio
      content = <div>Categoria non trovata o contenuto non disponibile.</div>;
    }
  }

  return <div className="container mx-auto p-4">{content}</div>;
}
