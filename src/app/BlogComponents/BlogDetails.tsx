import dayjs from "dayjs";
import MiddlPart from "@/app/BlogComponents/MiddlePart";
import pageArticles from "../_data/articles";

export default function Page({ params }: { params: { slug: any } }) {
  //cerca se esiste un articolo con lo slug ricevuto
  const article: any = pageArticles.find(function (checkArticle) {
    if (params.slug == checkArticle.slug) return true;
    else return false;
  });

  return (
    <div>
      <div className="w-full top-0 z-50  ">
        <img
          src={article.image}
          className="w-full opacity-80 object-cover h-[500px]"
          alt=""
        />
      </div>
      <div className="flex justify-center px-7 lg:px-0">
        <div className="max-w-5xl w-full  ">
          <div className="rounded-2xl p-0 flex items-center bg-white z-10 flex-col  ">
            <a
              className=" max-w-5xl w-full lg:1/2 self-stretch flex-1 aspect-auto flex items-center"
              href="/it/blog/10-prompt-per-generare-immagini-ia-con-risultati-garantiti"
            ></a>
            <div className="flex-1">
              <div className="">
                <div className="flex mb-3"></div>
                <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5">
                  <a href={article.url}>{article.title}</a>
                </h2>
                <div className="text-text text-gray-500 ">
                  <p>{article.shortDescription}</p>
                </div>
                <div className="flex items-center gap-[15px]">
                  <img
                    className="h-full w-full my-10 object-cover rounded-full max-w-[55px]"
                    src={article.author.image}
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
                <img
                  className="  rounded-xl opacity-80 w-full"
                  src={article.image}
                  alt="Art 10 prompt"
                  height={800}
                  width={1000}
                  loading="eager"
                  decoding="async"
                ></img>
                <div className="my-10 text-xl font-mono">
                  {article.shortDescription}
                </div>
                <hr />
                <MiddlPart articles={article}></MiddlPart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
