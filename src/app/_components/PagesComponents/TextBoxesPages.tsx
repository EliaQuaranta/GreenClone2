import React from "react";

function TextBoxesService({ Info }: { Info: any }) {
  //console.log("AOOOROOMMAAAAA", Info);
  return (
    <div className="main">
      <div className="bg-white flex justify-center">
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 pt-7 pb-20 max-w-5xl px-7 lg:px-0">
          {Info.textBlockInfos.map((info: any, index: number) => (
            <div key={index} className="max-h-fit">
              <div className="md:flex flex-col border-l-2 border-primary min-h-max pb-2">
                <div className="">
                  <div className="flex pl-[26px]  ">
                    <img src={info.textBoxIcon.url} alt="" className="w-8" />
                  </div>
                  <div className="pl-7 fontHead font-bold text-xl">
                    {info.textBoxTitle}
                  </div>
                  <div
                    className="pl-7 pt-6 "
                    dangerouslySetInnerHTML={{
                      __html: info.textBoxText,
                    }}
                  ></div>
                  <div
                    className={
                      info.textBoxLink == null
                        ? "hidden"
                        : "pt-4 pl-7 underline font-bold flex "
                    }
                  >
                    <a href={info.textBoxLink} className="flex">
                      Scopri di più!
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextBoxesService;
{
  /*<div 
  
      <div className="bg-white flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 pt-20 pb-32 max-w-5xl px-7 lg:px-0">
          {Info.map((info: any, index: number) => (
            <div key={index}>
              {info.pageBlocks.map((block: any, blockIndex: number) => (
                <div key={blockIndex}>
                  <div className="md:flex flex-col border-l-2 border-primary pb-8">
                    <div className="flex text-primary lg:pl-10 ">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                        />
                      </svg>
                    </div>
                    <div className="pl-7 fontHead font-bold text-xl">
                      {block.textBoxTitle}
                    </div>
                    <div className="pl-7 pt-6">{block.text}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>*/
}
