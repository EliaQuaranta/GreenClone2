import Link from "next/link";
import React from "react";

<<<<<<< HEAD
function MiddlPart({ categories }: { categories: any }) {
  return (
    <div className="flex justify-center">
      <div className="max-w-5xl w-full px-10">
        <ul className="flex flex-wrap justify-center gap-7 py-10">
          {categories &&
            Array.isArray(categories) &&
            categories.map((category: any) => (
              <li key={category.title}>
                <Link
                  href={category.url}
                  className="btn rounded-md btn-primary"
                >
                  {category.title}
                </Link>
              </li>
            ))}
=======
function MiddlPart() {
  return (
    <div className="flex justify-center">
      <div className="max-w-5xl w-full px-10">
        <ul className="flex flex-wrap justify-center gap-7 py-10 ">
<<<<<<< HEAD
<<<<<<< HEAD
          {articles.map((articles: any) => (
            <button className="btn btn-primary ">
              <a href={articles.categories}>{articles.categories}</a>
=======
          <li>
            <button className="btn btn-md px-7 btn-primary rounded-md text-white">
              tutorial
>>>>>>> parent of 33a82c8... problema .map in articlesgrid, tentativo di mettere 2 categofie in un articolo ancora non riuscito
=======
          <li>
            <button className="btn btn-md px-7 btn-primary rounded-md text-white">
              tutorial
>>>>>>> parent of 33a82c8... problema .map in articlesgrid, tentativo di mettere 2 categofie in un articolo ancora non riuscito
            </button>
          </li>
          <li>
            <button className="btn btn-md px-7 btn-primary rounded-md text-white">
              intelligenza artificiale
            </button>
          </li>
          <li>
            <button className="btn btn-md px-7 btn-primary rounded-md text-white">
              Seo & copywriting
            </button>
          </li>
          <li>
            <button className="btn btn-md px-7 btn-primary rounded-md text-white ">
              AI image
            </button>
          </li>
>>>>>>> 0e518e4a3f0a78c010bcfdd2212167cb8040f1e2
        </ul>
      </div>
    </div>
  );
}

export default MiddlPart;
