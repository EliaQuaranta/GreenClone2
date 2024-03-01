import React, { Component } from "react";

function TextBoxesService({ Info }: { Info: any }) {
  return (
    <div className="main">
      <div className=" bg-white px-7 lg:px-0 ">
        <h1 className="text-center pt-40 font-extrabold text-4xl text-primary ">
          Alsafi
        </h1>
        <h3 className="text-center pt-3 text-md fontHead ">
          "Servizi Principali"
        </h3>
      </div>

      <div className="bg-white flex justify-center">
        <div className="grid sm:grid-cols-3 gap-20 pt-20 pb-32 max-w-5xl px-7 lg:px-0 ">
          {Info.serviziEntries.map((info: any) => (
            <div className=" md:flex flex-col border-l-2  border-primary  pb-8">
              <div className="flex text-primary lg:pl-10 ">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              <div className="pl-7 fontHead font-bold text-xl">
                {info.title}
              </div>
              <div
                className="pl-7 pt-6"
                dangerouslySetInnerHTML={{
                  __html: info.fullPostContent,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextBoxesService;
