import { info } from "console";
import Link from "next/link";
import React from "react";

function TextBoxesService({ Info }: { Info: any }) {
  return (
    <div className="main">
      <div className="bg-white flex justify-center">
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 pt-20 pb-32 max-w-5xl px-7 lg:px-0">
          {Info.textBlockInfos.map((info: any, index: number) => (
            <div key={index} className="">
              <div className="md:flex flex-col border-l-2 border-primary pb-8">
                <div className="">
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
                    {info.textBoxTitle}
                  </div>
                  <div className="pl-7 pt-6">{info.textBoxText}</div>
                  <div className="pl-7 pt-6">
                    <a href={info.textBoxLink}>ciao</a>
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
  /*
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
