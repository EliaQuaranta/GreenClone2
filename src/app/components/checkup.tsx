import React, { Component } from "react";

function Checkup() {
  return (
    <div className=" columns-1 columns-md-1 ">
      <div className="bg-[#E3DCD7] text-center  ">
        <h1 className=" p-16 font-bold text-5xl items-center  ">
          Contattaci per un CheckUp{" "}
          <span className="text-cyan-400 ">Gratuito</span>
          <button className="bg-cyan-400 p-3 aling-center border-cyan-900 text-white font-bold ">
            {" "}
            <h1 className="flex items-center text-lg ">
              Scrivici{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </h1>{" "}
          </button>
        </h1>
      </div>

      <img src="\foto-def-logo.jpg" className="imgTeam" alt="" />
    </div>
  );
}

export default Checkup;
