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
      <div className="grid md:grid-cols-2 gap-15 max-w-5xl md:py-4">
        <div className={imagePosition == "left" ? "order-last " : ""}>
          <h1 className="  font-bold text-5xl leading-snug">{title}</h1>

          <h4 className="  fontHead2 text-lg text-clip pt-5">{subtitle}</h4>

          <div>
            <button className="btn btn-primary btn-lg p-6 mb-16   mt-7">
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
            <div className=" w-full justify-center">
              <div className="carousel lg:max-w-[500px] lg:max-h-[500px] max-h-[300px] gap-2">
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
              <div className=" justify-start flex w-full py-2 gap-2">
                {images.map((src: any, index: number) => (
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
