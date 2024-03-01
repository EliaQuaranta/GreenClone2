import React, { Component } from "react";

function TextImgcomponent({ infos }: { infos: any }) {
  console.log("info", infos);
  return (
    <div className="flex  justify-center mt-16">
      <div className="w-full max-w-5xl grid grid-cols-2 ">
        <div className=" gap-15 max-w-5xl md:py-4">
          <h1 className="  font-bold text-5xl ">
            {infos[0].pageBlocks[0].blockTitle}
          </h1>

          <h4 className="  fontHead2 text-lg text-clip pt-5">
            {infos[0].pageBlocks[0].subtitle}
          </h4>

          <div>
            <button className="btn btn-primary btn-lg p-6 mb-16   mt-7">
              TUTTI I SERVIZI
            </button>
          </div>
        </div>

        <div>
          {infos[0].pageBlocks[0] && infos.length == 1 && (
            <div className="lg:w-full flex items-center">
              <img
                src={infos[0].pageBlocks[0].img[0].url}
                className=" min-h-2 w-full"
                alt=""
              />
            </div>
          )}

          {infos[0].pageBlocks[0] && infos.length > 1 && (
            <div className=" w-full justify-center">
              <div className="carousel lg:max-w-[500px] lg:max-h-[500px] max-h-[300px] gap-2">
                {infos.map((src: any, index: number) => (
                  <div
                    key={index}
                    id={"item" + index}
                    className="carousel-item"
                  >
                    {" "}
                    <img src={infos[0].pageBlocks[0].img[0].url} alt="" />
                  </div>
                ))}
              </div>
              <div className=" justify-start flex w-full py-2 gap-2">
                {infos.map((src: any, index: number) => (
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
