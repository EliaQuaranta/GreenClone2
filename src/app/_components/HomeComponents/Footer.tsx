import React, { Component } from "react";

function Footer() {
  return (
    <>
      <footer className=" pt-20 bg-neutral ">
        <div className="grid lg:grid-cols-2  grid-cols-1">
          <div className="footer g p-10  text-neutral-content">
            <img
              src="/simbolo-alsafi.png"
              className="max-w-[150px] ml-24 lg:ml-52"
              alt=""
            />
          </div>
          <div className="footer grid-rows-2 p-10 bg-neutral text-neutral-content">
            <nav>
              <div className="footer-title">Services</div>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <div className="footer-title">Company</div>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <div className="footer-title">Legal</div>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
              <div className="footer-title">Social</div>
              <a className="link link-hover">Twitter</a>
              <a className="link link-hover">Instagram</a>
              <a className="link link-hover">Facebook</a>
              <a className="link link-hover">Github</a>
            </nav>
            <nav>
              <div className="footer-title">Explore</div>
              <a className="link link-hover">Features</a>
              <a className="link link-hover">Enterprise</a>
              <a className="link link-hover">Security</a>
              <a className="link link-hover">Pricing</a>
            </nav>
            <nav>
              <div className="footer-title">Apps</div>
              <a className="link link-hover">Mac</a>
              <a className="link link-hover">Windows</a>
              <a className="link link-hover">iPhone</a>
              <a className="link link-hover">Android</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
