"use client";
import dayjs from "dayjs";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import React from "react";

function ArrowLeft(props: any) {
  return (
    <button
      onClick={props.onClick}
      className=" md:hidden p-4 flex items-center justify-center leading-none bg-base-200 btn-circle btn-lg absolute top-1/2 -translate-x-full -translate-y-1/2  -left-6"
    >
      {"<"}
    </button>
  );
}
function ArrowRight(props: any) {
  return (
    <button
      onClick={props.onClick}
      className=" p-4 flex items-center justify-center leading-none bg-base-200 btn-circle btn-lg absolute top-1/2 translate-x-full -translate-y-1/2 -right-6"
    >
      {">"}
    </button>
  );
}

function ArticlesSlider({ articoli }: { articoli: any[] }) {
  console.log("SliderArticoliCMS", articoli);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //dotsClass: "slick-dots slick-thumb  ",
    //nextArrow: <ArrowRight />,
    //revArrow: <ArrowLeft />;
  };

  return (
    <div className="flex justify-center w-screen max-w-5xl ">
      <div className="max-w-full lg:max-w-5xl px-5">
        <Slider {...settings}>
          {articoli.map((article: any, i: number) => (
            <div key={i} className="w-full px-3 py-5 mt-[10px]">
              <div className="rounded-2xl p-0 flex items-center bg-white z-10 flex-col lg:gap-[50px] lg:flex-row ">
                <a
                  className=" max-w-5xl w-full lg:1/2 self-stretch flex-1 aspect-auto flex items-center"
                  href={article.postUrl}
                >
                  <img
                    className="  rounded-xl opacity-80 w-full"
                    src={article.imageUrl}
                    alt="Art 10 prompt"
                    height={800}
                    width={1000}
                    loading="eager"
                    decoding="async"
                  ></img>
                </a>

                <div className="flex-1">
                  <div className="my-[60px] mr-[50px]">
                    {article.categories && article.categories.length > 0 && (
                      <div className="flex mb-3">
                        <a
                          className=" ml-1 items-center z-10 relative transition-all duration-200 group px-[8px] py-[6px] lg:px-[10px] lg:py-[6px] rounded-[50px] bg-white text-gray-900 hover:text-green-900 white ring-2 ring-black"
                          href={article.postUrl}
                        >
                          <span className="block text-inherit w-full h-full rounded-[50px] text-xs font-bold font-chivo ">
                            {article.categories.title}
                          </span>
                        </a>
                      </div>
                    )}
                    <h2 className=" font-bold font-chivo text-[38px] leading-[30px] md:text-heading-3 mb-5">
                      <a href={article.postUrl}>{article.title}</a>
                    </h2>
                    <div className="text-lg text-gray-500 mb-[44px]">
                      <p>{article.shortDescription}</p>
                    </div>
                    <div className="flex items-center gap-[15px]">
                      <img
                        className="h-full w-full object-cover rounded-full max-w-[55px]"
                        src={article.author.imageUrl}
                        alt="Logo round web"
                        height={2304}
                        width={2305}
                        loading="eager"
                        decoding="async"
                      />
                      <div>
                        <p className="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6 capitalize">
                          {article.author.name}
                        </p>
                        <p className="text-sm font-bold">
                          {dayjs(article.date).format("DD/MM/YYYY")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ArticlesSlider;
