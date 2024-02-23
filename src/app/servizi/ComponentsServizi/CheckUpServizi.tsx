import React, { Component } from "react";

function CheckUpServizi() {
  return (
    <div className="">
      <div className="bg-[#E3DCD7] flex justify-center ">
        <div className="container md:flex-row  max-w-5xl ">
          <div className="font-bold text-3xl items-center  pl-7 lg:pl-0  lg:flex aling-items lg:py-11 ">
            Contattaci per un CheckUp{" "}
            <span className="text-primary p-2 "> Gratuito</span>
            <button className="blocked btn btn-lg btn-primary text-lg flex lg:mt-0 mt-4  ">
              Scrivici{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 m-0 pt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckUpServizi;
