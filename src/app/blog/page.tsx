import ArticlesSlider from "../_components/BlogComponents/ArticlesSlider";
import ArticlesGrid from "../_components/BlogComponents/ArticlesGrid";
import MiddlePart from "../_components/BlogComponents/CategoryButtons";
import SearchBar from "../_components/BlogComponents/SearchBar";
import BlogHeader from "../_components/BlogComponents/BlogHeader";
import React from "react";

async function getBlogData() {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `
    query MyQuery {
      entries(section: "blog") {
        ... on blog_blogArticle_Entry {
          id
          title
          url
          slug
          featureImage {
                url
                ... on hardDisk2_Asset {
                  id
                  url
                }
              }
         author {
              id
              fullName
              photo {
                url
              }
          }
          featureImage {
            url
            id
          }
          postCategories {
            url
            title
            slug
          }
        }
      }
      categories {
        title
        url
        slug
      }
    }
      `,
  });

  let blogPosts = await results.json();
  return blogPosts.data;
}

async function getData() {
  const results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `query MyQuery {
      entries(section: "Blog") {
        slug
      }
      categories {
        slug
      }
    }
  
    
`,
    cache: "default",
  });

  let cmsData = await results.json();

  return cmsData.data;
}

export async function generateStaticParams() {
  const data = await getData();

  const slugs = data.map((post: any) => ({
    slug: post.entries.slug,
    categories: post.categories[0].slug,
  }));

  return slugs;
}

export default async function Page() {
  const data = await getBlogData();

  const articles = data.entries;
  const categories = data.categories;

  const sliderArticles = articles.slice(0, 3);
  const gridArticles = articles.slice(3);

  return (
    <div className="blog">
      <BlogHeader></BlogHeader>
      <div className="flex justify-center">
        <div className="relative max-w-5xl border-b pb-[57px] ">
          <ArticlesSlider articoli={sliderArticles} />
        </div>
      </div>

      <div>
        <MiddlePart categories={categories}></MiddlePart>
        <div className="flex justify-center text-4xl font-bold">
          NEWS AND TUTORIAL
        </div>

        <div className="flex justify-center text-center text-xl py-10">
          Scopri come utilizzare al meglio i nostri strumenti ed esercitati con
          i tutorial
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="">
              <SearchBar Search={articles}></SearchBar>
            </div>
          </div>
        </div>

        <ArticlesGrid articles={gridArticles} />
      </div>
    </div>
  );
}
