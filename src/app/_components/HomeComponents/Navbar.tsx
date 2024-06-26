import Link from "next/link";
import React, { Component } from "react";

function Navbar() {
  return (
    <>
      <div className="w-full navbar pt-0 pr-0 pb-1  flex justify-between z-40 bg-white sticky top-0">
        <Link href="/">
          <img
            src="/logo-alsafi-payoff.png"
            className=" w-full pl-7 pb-3"
            alt=""
          />
        </Link>

        <div className="flex   text-center ">
          <ul className="menu menu-horizontal   hidden md:flex  menu-sm  fontnav items-center  lg:gap-4 text-xs  md:shrink-0  ">
            {/* Navbar menu content here */}

            <li>
              <Link href="/seo">SEO</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <Link href="/servizi">SERVIZI</Link>
            </li>
            <li>
              <Link href="/analisi">ANALISI</Link>
            </li>
            <li>
              <Link href="/blog-sanity">ee</Link>
            </li>
          </ul>
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn bg-primary py-3 h-20 w-20   rounded-bl-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current text-white"
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
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}

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
              <a href="#">
                <img
                  src="/logo-alsafi-payoff.png"
                  className=" px-3 py-3"
                  alt=""
                />
              </a>
            </li>
            <li>
              <Link href="/servizi/seo">SEO</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <Link href="/servizi">SERVIZI</Link>
            </li>
            <li>
              <Link href="/analisi">ANALISI</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
