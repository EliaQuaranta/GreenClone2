import React, { Component } from "react";

function Footer() {
  return (
    <div>
      <h2 className="text-center">""loghi""</h2>
      <div className="pt-20">
        <img src="/green-click-sala-riunioni.jpg" alt="" />
      </div>
      <div className="text-center ">
        <h2 className="text-4xl font-bold pt-32 pb-32 bg-[#F5F1EE]">
          {" "}
          Richiedi una <span>consulenza gratuita</span>
        </h2>
      </div>
      <div>
        <div className="main">
          <div className=" bg-[#F5F1EE]  "></div>
          <div className="bg-[#F5F1EE] flex justify-center">
            <div className="container-fluid flex md:flex-row flex-col gap-20 pt-20 pb-32 max-w-[1100px] ">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">What is your name?</span>
                  <span className="label-text-alt">Top Right label</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text-alt">Bottom Left label</span>
                  <span className="label-text-alt">Bottom Right label</span>
                </div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">What is your name?</span>
                  <span className="label-text-alt">Top Right label</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text-alt">Bottom Left label</span>
                  <span className="label-text-alt">Bottom Right label</span>
                </div>
              </label>
            </div>
          </div>

          {/* <h3 className=' text-center font-bold'>Crediamo nella trasparenza,
        in un rapporto di confronto
        e collaborazione continua con il cliente.</h3> */}

          {/* <h3>Ad ogni progetto diamo presenza, attenzione e cura.</h3>
    <h3>Da noi trovi sempre qualcuno che ti risponde quando chiami!</h3> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
