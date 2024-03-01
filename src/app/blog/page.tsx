import MainBlog from "../BlogComponents/MainBlog";
import ArticlesSlider from "../BlogComponents/ArticlesSlider";
import ArticlesGrid from "../BlogComponents/ArticlesGrid";
import MiddlePart from "../BlogComponents/MiddlePart";

import { useState } from "react";
import SearchBar from "../BlogComponents/SearchBar";

async function getCmsArticlesAndCategories() {
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
    cache: "no-cache",
  });

  let blogPosts = await results.json();
  console.log("blogPostPAZZO", blogPosts.data);
  return blogPosts.data;
}

export default async function Blog() {
  const cmsData = await getCmsArticlesAndCategories();

  const articles = cmsData.entries;
  const categories = cmsData.categories;

  const articless = articles.slice(0, 3);
  const articlesss = articles.slice(3);
  //console.log("fwfwfefefwfwfwfw", articless);
  return (
    <div className="blog">
      <MainBlog></MainBlog>
      <div className="flex justify-center">
        <div className="relative max-w-5xl border-b pb-[57px] ">
          <ArticlesSlider articoli={articless} />
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

        <ArticlesGrid articles={articlesss} />
      </div>
    </div>
  );
}
