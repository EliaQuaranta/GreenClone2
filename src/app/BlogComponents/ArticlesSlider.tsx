import dayjs from "dayjs";

function ArticlesSlider({ articles }: { articles: any[] }) {
  return (
    <div className="flex justify-center">
      {articles.map((article: any) => (
        <div
          className="relative grow max-w-5xl min-h-[auto]  "
          tabIndex={-1}
          style={{ width: "100%", display: "inline-block" }}
        >
          <div className="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row">
            <a
              className="block self-stretch flex-1 aspect-auto"
              href="/it/blog/10-prompt-per-generare-immagini-ia-con-risultati-garantiti"
            >
              <img
                className="h-full w-full object-cover rounded-xl opacity-80"
                src={article.image}
                alt="Art 10 prompt"
                height={800}
                width={1200}
                loading="eager"
                decoding="async"
              />
            </a>
            <div className="flex-1">
              <div className="my-[60px] mr-[50px]">
                <div className="flex mb-3">
                  <a
                    className=" ml-1 items-center z-10 relative transition-all duration-200 group px-[8px] py-[6px] lg:px-[10px] lg:py-[6px] rounded-[50px] bg-white text-gray-900 hover:text-green-900 white ring-2 ring-black"
                    href={article.category.url}
                  >
                    <span className="block text-inherit w-full h-full rounded-[50px] text-xs font-bold font-chivo ">
                      {article.category.title}
                    </span>
                  </a>
                </div>
                <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5">
                  <a href={article.url}>{article.title}</a>
                </h2>
                <div className="text-text text-gray-500 mb-[44px]">
                  <p>{article.shortDescription}</p>
                </div>
                <div className="flex items-center gap-[15px]">
                  <img
                    className="h-full w-full object-cover rounded-full max-w-[55px]"
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
              </div>
            </div>
          </div>
          <div className="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]">
            <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-8 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticlesSlider;
