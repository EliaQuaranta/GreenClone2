import React, { Component } from "react";

function Banner({ Info }: { Info: any }) {
  console.log("bannervannerbanner", Info);
  return (
    <div className="flex justify-center  mb-10">
      <img
        src={Info.image.url}
        alt="Descrizione dell'immagine"
        className=" object-cover w-full opacity-80 h-[500px]"
      />
      <div className="flex justify-center">
        <div className="w-full max-w-5xl shrink ">
          <div className="absolute text-center inset-0 justify-center flex flex-col items-center ">
            <div className=" mb-72 backdrop-brightness-[0.4] drop-shadow p-4 text-7xl font-bold text-gray-100 text ">
              {Info.textBanner}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
