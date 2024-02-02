import React, { Component } from "react";

function MiddlPart() {
  return (
    <div className="flex justify-center">
      <div className="max-w-5xl w-full px-10">
        <ul className="flex flex-wrap justify-center gap-7 py-10 ">
          <li>
            <button className="btn btn-md px-7 btn-primary rounded-md text-white">
              tutorial
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
