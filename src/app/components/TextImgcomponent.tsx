import React, { Component } from "react";

function TextImgcomponent({
  title,
  subtitle,
  images,
  imagePosition,
}: {
  title: any;
  subtitle: string;
  images: any;
  imagePosition: any;
}) {
  return (
    <div className="flex  justify-center p-10 xl:p-0 ">
      <div className="grid grid-cols-2 gap-20 max-w-5xl py-28 ">
        <div className={imagePosition == "left" ? "order-last " : ""}>
          <h1 className="  font-bold text-5xl leading-snug">{title}</h1>

          <h4 className="  fontHead text-lg text-clip pt-5">{subtitle}</h4>

          <div>
            <button className="bg-cyan-400 p-6 mb-16 border-cyan-900 text-white font-bold  mt-7">
              TUTTI I SERVIZI
            </button>
          </div>
        </div>

        <div>
          {images && images.length == 1 && (
            <div className="lg:w-full flex items-center">
              <img src={images} className=" min-h-2 w-full" alt="" />
            </div>
          )}

          {images && images.length > 1 && (
            <div className="h-8 w-8 hover:border transition-all border-transparent hover:border-black duration-300 flex items-center justify-center rounded-full">
              <div className="carousel  lg:max-w-[500px] max-h-[500px]  pt-32 gap-">
                {images.map((src: any, index: number) => (
                  <div
                    key={index}
                    id={"item" + index}
                    className="carousel-item"
                  >
                    {" "}
                    <img src={src} alt="" />
                  </div>
                ))}
              </div>
              <div className="flex justify-start pl-5 w-full py-2 gap-2">
                <a>
                  {images.map((src: any, index: number) => (
                    <div
                      key={index}
                      id={"#item" + index}
                      className="carousel-item"
                    >
                      {" "}
                      <img src={src} alt="" />
                    </div>
                  ))}
                  <div className="h-2 w-2 bg-black rounded-full"></div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextImgcomponent;
