import React from "react";
import dayjs from "dayjs";

function ArticleDetail({ articles }: { articles: any[] }) {
  console.log("articlesArticles", articles);

  return (
    <div className="w-full top-0 z-50">
      {articles.map((article, index) => (
        <div>
          <div key={index} className="flex justify-center">
            <img
              src={article.imageUrl}
              alt="Descrizione dell'immagine"
              className=" object-cover w-full opacity-80 h-[500px]"
            />
            <div className="flex justify-center">
              <div className="w-full max-w-5xl shrink">
                <div className="absolute  text-center justify-center inset-0  flex flex-col items-center ">
                  <p className="bg-white mb-20  rounded-full p-4 text-xl font-bold text-black">
                    {article.title}
                  </p>
                  <p className="text-4xl font-bold  text-white pb-52 text-ellipsis overflow-hidden ... ">
                    {article.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  lg:px-0 text-center">
            <div className="max-w-5xl w-full  ">
              <div className="rounded-2xl p-0 flex items-center bg-white z-10 flex-col  ">
                <a
                  className=" max-w-5xl w-full lg:1/2 self-stretch flex-1 aspect-auto flex items-center"
                  href="/it/blog/10-prompt-per-generare-immagini-ia-con-risultati-garantiti"
                ></a>
                <div className="flex-1 sm:px-20 lg:px-0">
                  <div className="">
                    <div className="flex my-6"></div>
                    <div className="text-xl text-start text-black font-semibold overflow-clip   ">
                      {article.shortDescription}
                    </div>
                    <div className="flex items-center gap-[15px]">
                      <img
                        className="h-full w-full  my-10 object-cover rounded-full max-w-[55px]"
                        src={article.author.imageUrl}
                        alt="Logo round web"
                        height={2304}
                        width={2305}
                        loading="eager"
                        decoding="async"
                      />
                      <div>
                        <p className="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6 capitalize">
                          {article.author.fullName}
                        </p>
                        <p className="text-sm font-bold">
                          {dayjs(article.date).format("DD/MM/YYYY")}
                        </p>
                      </div>
                    </div>

                    <img
                      className="  rounded-xl opacity-80 w-full "
                      src={article.imageUrl}
                      alt="Art 10 prompt"
                      height={800}
                      width={1000}
                      loading="eager"
                      decoding="async"
                    ></img>
                    <div>
                      {article.fullPostContent}
                      <div className=" pt-10 pb-10  text-xl text-start items-center text-black font-semibold "></div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ArticleDetail;
