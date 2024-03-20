import React, { Component } from "react";

function TextImgcomponent({ infos }: { infos: any }) {
  //console.log("trimone", infos);
  return (
    <div className="flex  lg:flex-row justify-center  mt-7 lg:px-0 px-7 lg:pt-0 pt-10">
      <div className="w-full max-w-5xl grid  items-center grid-cols-1 md:grid-cols-2  lg:grid-cols-2 lg:mx-0 md:mx-[2/4] sm:px-[50px]">
        <div
          className={
            infos.imagePosition == "left"
              ? "order-last gap-15 max-w-5xl  md:py-4 lg:text-start md:text-start sm:text-center text-center"
              : "gap-15 max-w-5xl md:py-4 lg:text-start md:text-start sm:text-center text-center"
          }
        >
          <h1 className="  font-bold text-5xl ">{infos.blockTitle}</h1>

          <h4 className="  text-lg text-clip pt-5 fontHead3">
            {infos.blockSubtitle}
          </h4>

          <h4 className="  text-lg text-clip pt-5">{infos.blockText}</h4>

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
          {infos.blockImg[0].url && infos.blockImg.length == 1 && (
            <div className="lg:w-full flex items-center max-w-fit ">
              <img src={infos.blockImg[0].url} className=" " alt="" />
            </div>
          )}
          {infos.blockImg[0].url && infos.blockImg.length > 1 && (
            <div className=" w-[400px] justify-center pb-7 px-10 md:px-0 lg:px-0  ">
              <div className="carousel  lg:max-w-[500px] lg:max-h-[500px] max-h-[300px] gap-2 items-center  lg:items-baseline  ">
                {infos.blockImg.map((info: any, index: number) => (
                  <div
                    key={index}
                    id={"item" + index}
                    className="carousel-item  w-fit"
                  >
                    {" "}
                    <img
                      src={info.url}
                      alt="image carousel"
                      className="w-fit"
                    />
                  </div>
                ))}
              </div>
              <div className=" justify-start flex w-full  gap-2">
                {infos.blockImg.map((src: any, index: number) => (
                  <a
                    key={index}
                    href={"#item" + index} //href perchè gli "a" hanno bisogno di un link o comunque riferimento e con l'id non riuscivo a specificarlo
                    className="carousel-item h-2 w-2 bg-black rounded-full"
                  ></a>
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
{
  /*
<div className="flex justify-center ">
{infos.pageBlocks.map((infos: any) => (
  <div className="w-full max-w-5xl grid grid-cols-2 ">
    <div className="gap-15 max-w-5xl md:py-4">
      <h1 className="  font-bold text-5xl ">
        {infos[0].pageBlocks[0].blockTitle}
      </h1>

      <h4 className="  fontHead2 text-lg max-w-xl pt-5 shrink-1">
        {infos[0].pageBlocks[0].subtitle}
      </h4>

      <div>
        <button className="btn btn-primary btn-lg p-6 mb-16   mt-7">
          TUTTI I SERVIZI
        </button>
      </div>
    </div>

    <div>
      <div className="lg:w-full flex items-center">
        <img
          src={infos[0].pageBlocks[0].img[0].url}
          className=" min-h-2 w-full"
          alt=""
        />
      </div>
    </div>*/
}
