import React, { Component } from "react";

function Header() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl flex justify-center pt-20 ">
        <div className=" w-full lg:flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 grow-0 lg:grid-cols-1">
            <h1 className=" font-bold lg:text-7xl lg:pl-20 sm:text-7xl lg:pt-28 text-6xl md:pl-28 md:pt-0 pl-7   ">
              Click to
              <br />
              <span className="text-primary"> Grow</span>
            </h1>
            <h4 className=" fontHead lg:text-md text-md md:px-2 sm:pb-5 md:pt-1 lg:pb-44 md:pr-28  px-7 lg:pl-20   ">
              Esperienza, competenza,
              <br />
              metodo per il tuo business online.
            </h4>
          </div>

          <div className="flex  justify-center">
            <img
              src="\GCM_Rosa.gif"
              className="pt-8 w-full max-w-xl pb-9  lg:pb-24 lg:mb-6 "
              alt=""
            />
          </div>

          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
