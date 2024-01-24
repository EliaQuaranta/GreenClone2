import React, { Component } from "react";

function Carousel() {
  return (
    <div className="">
      <div className="lg:columns-2 ">
        <h2 className="font-bold text-4xl lg:pl-96 pl-10 pt-20">
          Casi di <span className="text-cyan-400">successo</span>
        </h2>
        <h2 className="pl-10 lg:pl-96 pt-7 fontHead">
          Ti raccontiamo come è andata con la gestione Green.Click
        </h2>
        <h2 className="pl-10 lg:pl-96 pt-7">
          Giornalmente veniamo a contatto e ascoltiamo tante storie, progetti,
          idee. Ci occupiamo dello sviluppo di strategie con tante
          caratteristiche diverse. Siamo convinti che per ogni business online
          si possa trovare la strada giusta per crescere. In questo spazio ti
          proponiamo alcuni casi studio per mostrarti come lavoriamo.
          <button className="mt-7  p-4 bg-cyan-400 flex">scopri di più!</button>
        </h2>

        <div className="carousel m-7  lg:max-w-[500px] max-h-[500px]  pt-14">
          <div id="item1" className="carousel-item ">
            <img
              src="/ecommerce-costumi-da-bagno-greenclick-1-800x600.jpg"
              className=""
            />
          </div>
          <div id="item2" className="carousel-item ">
            <img
              src="/green-click-case-history-brand-lusso-2-800x600.jpg"
              className=""
            />
          </div>
          <div id="item3" className="carousel-item ">
            <img
              src="/greenclick-ecommerce-sneakers2-800x600.jpg"
              className=""
            />
          </div>
        </div>
        <div className="flex justify-start pl-5 w-full py-2 gap-2">
          <a
            href="#item1"
            className="h-8 w-8 hover:border transition-all border-transparent hover:border-black duration-300 flex items-center justify-center rounded-full"
          >
            <div className="h-2 w-2 bg-black rounded-full"></div>
          </a>
          <a
            href="#item2"
            className="h-8 w-8 hover:border transition-all border-transparent hover:border-black duration-300 flex items-center justify-center rounded-full"
          >
            <div className="h-2 w-2 bg-black rounded-full"></div>
          </a>
          <a
            href="#item3"
            className="h-8 w-8 hover:border transition-all border-transparent hover:border-black duration-300 flex items-center justify-center rounded-full"
          >
            <div className="h-2 w-2 bg-black rounded-full"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
