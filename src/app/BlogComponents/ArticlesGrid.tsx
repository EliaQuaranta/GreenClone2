"use client";
import React, { useState } from "react";

function ArticlesGrid({ articles }: { articles: any[] }) {
  // Stato per tenere traccia della categoria attiva
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Estrae tutte le categorie singole dagli articoli
  const Categoriasingola = Array.from(
    new Set(
      articles.flatMap((article: any) =>
        article.categories.map((category: any) => category.slug)
      )
    )
  );

  // Filtra gli articoli in base alla categoria attiva
  const filteredArticles = activeCategory
    ? articles.filter((article: any) =>
        article.categories.filter(
          (category: any) => category.slug === activeCategory
        )
      )
    : articles;

  return (
    <div className="flex justify-center  ">
      <div className="relative grid-cols-1  lg:grid-cols-3 grid gap-6 w-full max-w-5xl min-h-[auto]">
        {filteredArticles.map((article: any) => (
          <div key={article.slug} className="">
            <a href={article.url}>
              <div className="flex items-center ">
                <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
                <span className="uppercase text-gray-500 text-xs">
                  {/* Mostro solo la prima categoria */}
                  {article.categories[0].title}
                </span>
              </div>
              <p className=" overflow-hidden hover:overflow-auto  hover:whitespace-normal whitespace-nowrap text-ellipsis   text-3xl font-chivo font-bold text-pretty  mb-[10px]">
                {article.title}
                <div className="absolute"></div>
              </p>
              <div className="relative mb-16 ">
                <div className="relative">
                  <div className="aspect-auto">
                    <img
                      className="w-full object-cover rounded-2xl z-10 relative"
                      src={article.image}
                      height={500}
                      width={300}
                      loading="eager"
                      decoding="async"
                    />
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

export default ArticlesGrid;
