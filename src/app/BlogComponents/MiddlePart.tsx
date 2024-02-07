import React, { Component } from "react";

function MiddlPart({ articles }: { articles: any }) {
  return (
    <div className="flex justify-center">
      <div className="max-w-5xl w-full px-10">
        <ul className="flex flex-wrap justify-center gap-7 py-10 ">
          {articles.map((articles: any) => (
            <button className="btn btn-primary ">
              <a href={articles.category.url}>{articles.category.title}</a>
            </button>
          ))}
        </ul>
        <div className="flex justify-center text-5xl font-bold py-2">
          NEWS AND TUTORIAL
        </div>
        <div className="flex justify-center text-xl py-10">
          Scopri come utilizzare al meglio i nostri strumenti ed esercitati con
          i tutorial
        </div>
      </div>
    </div>
  );
}

//articoli con più categorie
//articoli con altri articoli collegati sotto con le stesse categorie

export default MiddlPart;
