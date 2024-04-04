import React from "react";
import { SanityDocument } from "next-sanity";
import { client } from "../../sanity/lib/client";
import image from "next/image";
import ArticlesSlider from "../_components/BlogComponents/ArticlesSlider";
import ArticlesGrid from "../_components/BlogComponents/ArticlesGrid";
import MiddlePart from "../_components/BlogComponents/CategoryButtons";

import SearchBar from "../_components/BlogComponents/SearchBar";
import BlogHeader from "../_components/BlogComponents/BlogHeader";

const getData = `*[_type == "post" ] {
  _id,
  title,
  FullPostContent,
  shortDescription,
  "author": {
    "name": author->name,
    "imageUrl": author->image.asset->url
  },
  categories[]->{
    title,
    "categoryUrl": "/blog/" + slug.current
  },
  slug,
  "imageUrl": mainImage.asset->url,
  "authorImage": author->image.asset->url,
  "postUrl": "/blog/" + slug.current
}`;

const getCategory = `*[_type == "category"] {
  ...,
  "posts": *[_type == "posts" && references(^._id)],
  "url": slug.current
}`;

export default async function IndexPage() {
  const pages = await client.fetch<SanityDocument[]>(getData);
  const getCategories = await client.fetch<SanityDocument[]>(getCategory);
  console.log("cmssanity", pages);

  const post = pages;

  const articles = post;
  const categories = getCategories;

  const sliderArticles = articles.slice(0, 2);
  const gridArticles = articles.slice(2);

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

        <ArticlesGrid articles={gridArticles} category={categories} />
      </div>
    </div>
  );
}
