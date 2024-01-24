import React, { Component } from "react";

function Footer() {
  return (
    <div>
      <h2 className="text-center">""loghi""</h2>
      <div className="pt-20">
        <img src="/green-click-sala-riunioni.jpg" className="" alt="" />
      </div>
      <div className="text-center ">
        <h2 className="text-4xl font-bold pt-32 pb-32 bg-[#F5F1EE]">
          {" "}
          Richiedi una <span>consulenza gratuita</span>
        </h2>
      </div>
      <div className="bg-[#F5F1EE]">
        <div className="  grid lg:grid-cols-2 ">
          <div>
            <form className="lg:pl-72">
              <div className="grid gap-6 mb-6 lg:pl-20 mx-6 lg:mx-0 ">
                <div>
                  <input
                    type="text"
                    className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                    placeholder="Nome e Cognome"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                    placeholder="Telefono"
                  />
                </div>
              </div>
              <div className="mb-6 mx-6 lg:mx-0 lg:pl-20 ">
                <input
                  type="text"
                  className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                  placeholder="Provincia"
                />
              </div>
              <div className="mb-6 mx-6 lg:mx-0 lg:pl-20 ">
                <input
                  type="text"
                  id="password"
                  className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                  placeholder="Azienda/Settore"
                />
              </div>
              <div className="mb-6 mx-6 lg:mx-0 lg:pl-20 ">
                <input
                  type="text"
                  id="confirm_password"
                  className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                  placeholder="Sito Web"
                />
              </div>
              <div className="mb-6 mx-6 lg:mx-0  lg:pl-20 ">
                <input
                  type="text"
                  id="confirm_password"
                  className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                  placeholder="A quale servizio sei interessato?"
                />
              </div>
            </form>

            <p />
          </div>
          <div className="text-center">
            <textarea
              className="textarea w-3/4 h-full lg:h-1/2  rounded-none "
              placeholder="Scrivi qui le informazioni principali del tuo progetto online (tipo di prodotto, canali utilizzati, budget investito,target)..."
            ></textarea>
            <div className="flex items-start mb-6">
              <div className=" pl-14 lg:pl-28 flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  defaultValue=""
                  className="  w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="text-white lg:mr-72 mb-20  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:w-2/5 sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2  grid-cols-1 mt-32">
          <footer className="footer g p-10 bg-neutral text-neutral-content">
            <img
              src="/simbolo-alsafi.png"
              className="max-w-[150px] ml-24 lg:ml-52"
              alt=""
            />
          </footer>
          <footer className="footer grid-rows-2 p-10 bg-neutral text-neutral-content">
            <nav>
              <header className="footer-title">Services</header>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <header className="footer-title">Company</header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title">Legal</header>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
              <header className="footer-title">Social</header>
              <a className="link link-hover">Twitter</a>
              <a className="link link-hover">Instagram</a>
              <a className="link link-hover">Facebook</a>
              <a className="link link-hover">Github</a>
            </nav>
            <nav>
              <header className="footer-title">Explore</header>
              <a className="link link-hover">Features</a>
              <a className="link link-hover">Enterprise</a>
              <a className="link link-hover">Security</a>
              <a className="link link-hover">Pricing</a>
            </nav>
            <nav>
              <header className="footer-title">Apps</header>
              <a className="link link-hover">Mac</a>
              <a className="link link-hover">Windows</a>
              <a className="link link-hover">iPhone</a>
              <a className="link link-hover">Android</a>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
