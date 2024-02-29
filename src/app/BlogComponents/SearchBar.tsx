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

        <button onClick={Research}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      <div className="w-full max-w-5xl ">
        <div className="flex justify-center  ">
          <ul className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 ">
            {filteredArticles.map((article: any) => (
              <div className="flex justify-center ">
                <li key={article.id}>
                  <Link
                    href={article.url}
                    className="btn rounded-md btn-primary w-[300px] h-[60px] mt-[3px]  "
                  >
                    <div className="flex flex-col items-center ">
                      {article.title}
                      <div className="line-clamp-1 max-w-32 mt-2 ">
                        <hr />
                        <div className="mt-2">{article.shortDescription}</div>
                      </div>
                    </div>
                    <img
                      src={article.featureImage[0].url}
                      alt=""
                      className="w-[72px] max-h-16 rounded-md  "
                    />
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
