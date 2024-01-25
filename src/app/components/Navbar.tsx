import React, { Component } from "react";

function Navbar() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar  lg:fixed flex justify-between top-0 z-50 bg-white">
          <div className="text-center fontnav text-2xl md:text-xl  lg:text-6xl pl-0">
            Alsafi <img src="\simbolo-alsafi.png" className=" w-8 " alt="" />
          </div>

          <div className="flex   text-center ">
            <ul className="menu menu-horizontal hidden md:flex  menu-sm  fontnav items-center  lg:gap-4 text-xs  md:shrink-0  ">
              {/* Navbar menu content here */}
              <li>
                <a>GOOGLE ADS</a>
              </li>
              <li>
                <a>SEO</a>
              </li>
              <li>
                <a>FACEBOOK</a>
              </li>
              <li>
                <a>TUTTI I SERVIZI</a>
              </li>
              <li>
                <a>ANALISI GRATUITA</a>
              </li>
              <li>
                <a>CONTATTI</a>
              </li>
            </ul>
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side z-[51]">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 ">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
