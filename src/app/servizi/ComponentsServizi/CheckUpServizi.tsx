import Link from "next/link";
import React, { Component } from "react";

function CheckUpServizi({ Info }: { Info: any }) {
  return (
    <div className="bg-[#E3DCD7] flex justify-center">
      <div className=" container md:flex-row  max-w-5xl">
        <div className="font-bold text-3xl items-center pt-20 pb-20 pl-7 lg:pl-0   aling-items lg:py-11 ">
          <div className="text-bold p-2 lg:flex items-center ">
            {Info.checkUptext}
            <a href={Info.checkUpLink} className="lg:ml-72 ">
              <button className="blocked btn btn-lg btn-primary text-lg flex lg:mt-0 mt-4   ">
                {Info.CheckUpButtonText}
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckUpServizi;
