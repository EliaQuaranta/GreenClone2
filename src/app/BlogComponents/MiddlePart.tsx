import React, { Component } from "react";

function MiddlPart() {
  return (
    <div className="flex justify-center">
      <div className="max-w-5xl w-full px-10">
        <ul className="flex flex-wrap justify-center gap-7 py-10 ">
<<<<<<< HEAD
          {articles.map((articles: any) => (
            <button className="btn btn-primary ">
              <a href={articles.categories}>{articles.categories}</a>
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

export default MiddlPart;
