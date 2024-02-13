import React from "react";
import pageArticles from "../_data/articles";
import categories from "../_data/categories";

function MiddlPart({ articles }: { articles: any[0] }) {
  // Estrai tutte le categorie uniche dagli articoli
  const CategorieUniche = Array.from(
    new Set(
      articles.flatMap((article: any) =>
        article.categories.map((category: any) => category.title)
      )
    )
  );
  return (
    <div className="flex justify-center">
      <div className="max-w-5xl w-full px-10">
        <ul className="flex flex-wrap justify-center gap-7 py-10">
          {CategorieUniche.map((categoryTitle: any) => {
            // Trova l'oggetto category associato a categoryTitle
            const category = categories.find(
              (c: any) => c.title === categoryTitle
            );

            // Se l'oggetto category è trovato, crea il pulsante con il link
            if (category) {
              return (
                <li key={category.title}>
                  <button className="btn rounded-md btn-primary">
                    <a href={category.url}>{category.title}</a>
                  </button>
                </li>
              );
            }

            return null;
          })}
        </ul>
      </div>
    </div>
  );
}

export default MiddlPart;
