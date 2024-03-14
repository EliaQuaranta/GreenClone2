"use client";
import Link from "next/link";
import React, { useState } from "react";

function SearchBar({ Search }: { Search: any }) {
  const [query, setQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Debounce function
  const debounce = (func: any, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return function () {
      const context = null;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // Debounced version of the Research function
  const debouncedResearch = debounce(() => {
    const filteredResults = Search.filter((item: any) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    // Update state with filtered articles
    setFilteredArticles(filteredResults);
  }, 100); // Adjust the delay as needed

  const resetSearch = () => {
    setQuery("");
    setFilteredArticles([]);
  };

  return (
    <div className="w-full max-w-5xl pb-10 ">
      <div className="flex justify-center  sm:px-[29px] ">
        <input
          type="text"
          name=""
          id=""
          className="p-4 bg-slate-200 rounded-l-lg ingrandisciti   "
          placeholder="cerca..."
          value={query}
          onChange={(Change) => {
            setQuery(Change.target.value);
            debouncedResearch(); // Call the debounced function on input change
          }}
        />
        <button
          onClick={resetSearch}
          className="bg-slate-200 rounded-r-lg pr-3 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-black  "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>

      <div className="w-full max-w-5xl  px-0 md:px-3 sm:px-3  ">
        <ul className="flex-col flex items-start ">
          {filteredArticles.map((article: any) => (
            <div className=" w-full " key={article.id}>
              <li className="w-full px-3 sm:px-4 lg:px-4 ">
                <Link
                  href={article.url}
                  className=" rounded-md  btn bg-slate-200 w-full flex justify-start sm:flex-wrap  h-[60px] mt-[3px]  "
                >
                  <img
                    src={article.featureImage[0].url}
                    alt=""
                    className=" w-[64px] mb-3 mr-2 ml-[-5px]  rounded-md  "
                  />
                  <div className="grid grid-rows-2 ">
                    <div className="flex flex-col items-start pb-2 text-lg ">
                      {article.title}
                    </div>
                    <div className="line-clamp-1 sm:max-w-sm ">
                      <div className="!truncate ">
                        {article.shortDescription}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
