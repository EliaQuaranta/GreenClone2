"use client";
import React, { useState } from "react";

function BlogDetails({ articles }: { articles: any }) {
  // Stato per tenere traccia della categoria attiva

  // Estrae tutte le categorie singole dagli articoli
  const Categoriasingola = Array.from(
    new Set(
      articles.flat((article: any) =>
        article.categories.map((category: any) => category.slug)
      )
    )
  );

  // Ordina gli articoli in base alla data in ordine decrescente
  const sortedArticles = articles.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Prendi solo gli ultimi 3 articoli
  const ultimi3 = sortedArticles.slice(0, 3);

  return (
    <div className="flex justify-center">
      <div className="relative grid-cols-1  lg:grid-cols-3 grid gap-6 w-full max-w-5xl min-h-[auto]">
        {ultimi3.map((article: any) => (
          <div key={article.slug}>
            <a href={article.url}>
              <div className="flex items-center">
                <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
                <span className="uppercase text-gray-500 text-xs">
                  {/* Mostro solo la prima categoria */}
                  {article.categories[0].title}
                </span>
              </div>
              <div className=" min-h-8 lg:min-h-[80px] md:min-h-8">
                <p className="text-3xl font-bold mt-auto ">{article.title}</p>
              </div>

              <div className="relative mb-16">
                <div className="">
                  <div className="aspect-auto">
                    <img
                      className="hover:opacity-80 w-full object-cover rounded-2xl z-10 relative"
                      src={article.image}
                      height={500}
                      width={300}
                      loading="eager"
                      decoding="async"
                    />
                    <div></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
