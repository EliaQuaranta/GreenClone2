import React from "react";
import { client } from "../../../sanity/lib/client";
import ArticleDetail from "../../../../src/app/_components/BlogComponents/ArticleDetail";
import MiddlePart from "../../../../src/app/_components/BlogComponents/CategoryButtons";
import BlogCategory from "../../../../src/app/_components/BlogComponents/BlogCategory";

import RelatedArticles from "../../../../src/app/_components/BlogComponents/RelatedArticles.";

const getBlogPost = async (slug: any) => {
  const query = `{
    "posts": *[_type == "post" && slug.current == '${slug}'] {
      _id,
      title,
      fullPostContent,
      shortDescription,
      "author": {
        id,
        "name": author->name,
        "imageUrl": author->image.asset->url
         
      },
      "categories": categories[]->{
        title,
        _id,
        "slug": slug.current
      },
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      "postUrl": "/blog/" + slug.current
    },
    "categories": *[_type == "category" ] {
      title,
      "url": slug.current,
      slug
    }
  }
  `;

  const blogPost = await client.fetch(query);
  return blogPost;
};

const getRelatedArticles = async () => {
  const query = `
  *[_type == "post"] | order(postDate)[0..2] {
    "id": _id,
    
    "author": {
      "id": author->_id,
      "fullName": author->fullName,
      "photo": author->photo.asset->url
    },
    
    "title": title,
    "url": slug.current,
      "imageUrl": mainImage.asset->url,
    "content": {
      "id": _id,
      "fullPostContent": fullPostContent,
      "slug": slug.current,
      "url": url,
      "shortDescription": shortDescription,
      "featureImage": {
        "url": featureImage.asset->url,
        "id": featureImage.asset->_id
      },
      "postCategories": postCategories[]->{
        "title": title,
        "slug": slug.current,
        "url": "/blog/" + slug.current
      }
    }
  }
  `;

  const relatedArticles = await client.fetch(query);
  return relatedArticles;
};

const getCategory = async (slug: any) => {
  const query = `*[_type == "category" && slug.current == "${slug}"] {
    title,
    "url": slug.current,
    slug
  }`;

  const params = { slug };
  const category = await client.fetch(query, params);
  return category;
};

const getCategorizedArticle = async (slug: any) => {
  const query = `*[_type == "post" && references(*[_type=="category" && slug.current=="${slug}"]._id)] {
    _id,
    title,
    fullPostContent,
     "postUrl": "/blog/" + title,
    shortDescription,
    "author": {
      id,
      "name": author->name,
      "imageUrl": author->image.asset->url
    },
    "categories": categories[]->{
      title,
      _id,
      "slug": slug.current
    },
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    "postUrl": "/blog/" + title,
    "postCategories": postCategories[]->{
      "title": title,
      "slug": slug.current,
      "url": "/blog/" + slug.current
    }
  }`;

  const articles = await client.fetch(query);
  return articles;
};

export default async function SubBlog({ params }: { params: { slug: any } }) {
  const data = await getBlogPost(params.slug);

  const articles = data.posts;

  const categories = data.categories;
  console.log("categorieperibottoni", data.posts);
  if (articles.length) {
    const relatedArticles = await getRelatedArticles();

    return (
      <div className="">
        <div className="">
          <ArticleDetail articles={articles}></ArticleDetail>
        </div>
        <div>
          <MiddlePart categories={categories}></MiddlePart>
        </div>
        <div className="flex justify-center">
          <div className="max-w-5xl w-full">
            <hr />
          </div>
        </div>
        <div className="mt-12 ">
          <div className="text-center text-2xl font-semibold pb-10">
            {" "}
            I nostri articoli più recenti
          </div>
          <RelatedArticles articles={relatedArticles}></RelatedArticles>
        </div>
      </div>
    );
  }
  const articleCategory = await getCategory(params.slug);

  if (articleCategory) {
    const categorizedArticles = await getCategorizedArticle(params.slug);

    return (
      <div>
        <div>
          <BlogCategory articles={categorizedArticles} categorie={categories} />
        </div>
      </div>
    );
  } else {
    return <div>Categoeery not found</div>;
  }
}
