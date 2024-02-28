"use client";
import Link from "next/link";
import React, { useState } from "react";

function SearchBar({ Search }: { Search: any }) {
  const [query, setQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  const Research = () => {
    // Filtra gli articoli in base alla query
    const filteredResults = Search.filter((item: any) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    // Aggiorna lo stato con gli articoli filtrati
    setFilteredArticles(filteredResults);
  };
  const resetSearch = () => {
    // Resetta la query e gli articoli filtrati quando si preme il pulsante di reset
    setQuery("");
    setFilteredArticles([]);
  };
  return (
    <div className="w-full max-w-5xl pb-10">
      <div className="flex justify-center ">
        <button onClick={resetSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <input
          type="text"
          name=""
          id=""
          className="p-4 bg-primary rounded-lg "
          placeholder="cerca..."
          value={query}
          onChange={(Change) => setQuery(Change.target.value)}
        />

        <button onClick={Research}>Search</button>
      </div>

      <div className="w-full max-w-5xl ">
        <div className="flex justify-center  ">
          <ul className="rounded-lg bg-primary px-[120px] ">
            {filteredArticles.map((article: any) => (
              <div className="flex justify-start">
                <li key={article.id}>
                  <Link
                    href={article.url}
                    className="btn rounded-md btn-primary"
                  >
                    {article.title}

                    <div className="">{article.shortDescription}</div>
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
