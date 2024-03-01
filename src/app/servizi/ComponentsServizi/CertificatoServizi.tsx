import React, { Component } from "react";

function CertificatoServizi({ certificato }: { certificato: any }) {
  console.log("porcodeddio", certificato);
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-3 items-center gap-32  h-[500px]">
          <div className="text-3xl font-bold ">
            Certificati al{" "}
            <span className="text-primary">
              {" "}
              <br />
              100%
            </span>
          </div>
          <div>
            <img
              src="/green-click-google-premier-partner-2024-02.jpg"
              alt=""
              className="w-2/4"
            />

            <div
              className="pl-1 pt-6 font-bold text-xl"
              dangerouslySetInnerHTML={{
                __html: certificato.pagesEntries[2].title,
              }}
            ></div>
            <div
              className="pl-1 pt-6"
              dangerouslySetInnerHTML={{
                __html: certificato.pagesEntries[2].fullPostContent,
              }}
            ></div>
          </div>
          <div>
            {" "}
            <img
              src="/certificazione-facebook-300x194.png"
              alt=""
              className="w-3/4"
            />
            <div
              className="pl-1 pt-6 font-bold text-xl"
              dangerouslySetInnerHTML={{
                __html: certificato.pagesEntries[3].title,
              }}
            ></div>
            <div
              className="pl-1 pt-6"
              dangerouslySetInnerHTML={{
                __html: certificato.pagesEntries[3].fullPostContent,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificatoServizi;
