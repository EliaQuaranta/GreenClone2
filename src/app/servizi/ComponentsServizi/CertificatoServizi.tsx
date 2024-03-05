import React, { Component } from "react";

function CertificatoServizi({ Info }: { Info: any }) {
  return (
    <div className="flex justify-center bg-[#E3DCD7]  align-middle">
      <div className="w-full max-w-5xl my-16 mx-6 lg:mx-0">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 items-center lg:gap-32 md:gap-16 gap-0  ">
          <div className="text-3xl font-bold lg:text-balance text-center">
            {Info.mainTitle}
          </div>
          <div className="flex flex-col items-center  ">
            <img
              src={Info.secondSponsorImage[0].url}
              alt=""
              className="w-1/4 lg:w-2/4 md:w-2/4 "
            />
            <div className="pl-1 pt-6 font-bold text-xl"></div>
            <div className="text-center">{Info.firstSponsorText}</div>{" "}
          </div>
          <div className="flex flex-col items-center lg:ml-0 md:ml-0">
            <img
              src={Info.firstSponsorImage[0].url}
              alt=""
              className="w-2/4 lg:w-3/4 md:w-3/4 pb-5"
            />
            <div className="text-center">{Info.secondSponsorText}</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificatoServizi;
