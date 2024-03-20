import React, { Component } from "react";

function TextImgcomponent({ infos }: { infos: any }) {
  //console.log("infoinfoinfo", infos);
  return (
    <div className="flex  lg:flex-row justify-center  mt-7 lg:px-0 px-7">
      <div className="w-full max-w-5xl grid  items-center grid-cols-1 md:grid-cols-2  lg:grid-cols-2 lg:mx-0 md:mx-[2/4] sm:px-[50px]">
        <div
          className={
            infos.textimgImagePosition == "left"
              ? "order-last gap-15 max-w-5xl  md:py-4 lg:text-start md:text-start sm:text-center text-center"
              : "gap-15 max-w-5xl md:py-4 lg:text-start md:text-start sm:text-center text-center"
          }
        >
          <h1 className="  font-bold text-5xl ">{infos.textimgTitle}</h1>

          <h4 className="  text-lg text-clip pt-5 fontHead3"></h4>

          <h4 className="  text-lg text-clip pt-5">{infos.textimgSubtitle}</h4>

          <div>
            <a href={infos.blockLink}>
              <button
                className={
                  infos.blockButtonText == null
                    ? "mb-10"
                    : "btn btn-primary btn-lg p-6 my-7 "
                }
              >
                {infos.blockButtonText}
              </button>
            </a>
          </div>
        </div>

        <div className="">
          {infos.textimgImage[0].url && infos.textimgImage.length == 1 && (
            <div className="lg:w-full flex items-center max-w-fit ">
              <img src={infos.textimgImage[0].url} className=" " alt="" />
            </div>
          )}
          {infos.textimgImage.url && infos.textimgImage.length > 1 && (
            <div className=" w-full justify-center pb-16 px-10 md:px-0 lg:px-0 ">
              <div className="carousel lg:max-w-[500px] lg:max-h-[500px] max-h-[300px] gap-2 items-center  lg:items-baseline overflow-scroll">
                {infos.textimgImage.map((src: any, index: number) => (
                  <div
                    key={index}
                    id={"item" + index}
                    className="carousel-item flex"
                  >
                    {" "}
                    <img src={infos.blockImg.url} alt="" />
                  </div>
                ))}
              </div>
              <div className=" justify-start flex w-full py-2 gap-2">
                {infos.map((src: any, index: number) => (
                  <a
                    key={index}
                    href={"#item" + index} //href perchè gli "a" hanno bisogno di un link o comunque riferimento e con l'id non riuscivo a specificarlo
                    className="carousel-item h-2 w-2 bg-black rounded-full"
                  >
                    .
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextImgcomponent;
