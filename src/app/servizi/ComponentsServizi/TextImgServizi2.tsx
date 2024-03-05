import React, { Component } from "react";

function TextImgcomponent2({ infos }: { infos: any }) {
  return (
    <div className="flex  lg:flex-row justify-center  mt-16">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-0 md:mx-[2/4] sm:px-[50px]">
        <div className=" gap-15 max-w-5xl md:py-4  lg:text-start md:text-start sm:text-center text-center">
          <h1 className="  font-bold text-5xl ">{infos.blockTitle}</h1>

          <h4 className="  fontHead2 text-lg text-clip pt-5">
            {infos.blockSubtitle}
          </h4>

          <div>
            <button className="btn btn-primary btn-lg p-6 mb-16    mt-7">
              TUTTI I SERVIZI
            </button>
          </div>
        </div>

        <div>
          {infos.blockImg[1].url && infos.blockImg.length == 1 && (
            <div className="lg:w-full flex items-center pb-16">
              <img
                src={infos[0].pageBlocks[0].img[0].url}
                className=" min-h-2 w-full"
                alt=""
              />
            </div>
          )}

          {infos.blockImg[1].url && infos.blockImg.length > 1 && (
            <div className=" w-full justify-center pb-16 px-10 md:px-0 lg:px-0 ">
              <div className="carousel lg:max-w-[500px] lg:max-h-[500px] max-h-[300px] gap-2 items-center  lg:items-baseline overflow-scroll">
                {infos.blockImg.map((src: any, index: number) => (
                  <div
                    key={index}
                    id={"item" + index}
                    className="carousel-item flex"
                  >
                    {" "}
                    <img src={infos.blockImg[1].url} alt="" />
                  </div>
                ))}
              </div>
              <div className=" justify-start flex w-full py-2 gap-2">
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
export default TextImgcomponent2;
