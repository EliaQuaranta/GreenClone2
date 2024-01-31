import React, { Component } from "react";

function MainComponent() {
  return (
    <div className="flex justify-center">
      <div className="pt-10  max-w-5xl ">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <div className="argument italic"> Economia</div>
            <h2 className="card-title">New album is released!</h2>
            <h3 className="card-subtitle">
              Click the button to listen on Spotiwhy app.
            </h3>
            <div className="card-actions pt-5">
              <img src="/simbolo-alsafi.png" className="w-12" alt="" />
              <div className="date pt-3">20/10/2003</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
