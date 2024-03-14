import React, { Component } from "react";

function Banner({ Info }: { Info: any }) {
  console.log;
  return (
    <div className="flex justify-center  mb-10">
      <img
        src={Info.banner[0].url}
        alt="Descrizione dell'immagine"
        className=" object-cover w-full opacity-80 h-[500px]"
      />
      <div className="flex justify-center">
        <div className="w-full max-w-5xl shrink ">
          <div className="absolute  text-center  justify-center inset-0  flex flex-col items-center ">
            <div className=" mb-72 backdrop-brightness-[0.4] drop-shadow p-4 text-7xl font-bold text-gray-100 text ">
              {Info.bannerTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
