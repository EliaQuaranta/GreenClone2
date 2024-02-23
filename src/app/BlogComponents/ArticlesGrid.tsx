function ArticlesGrid({ articles }: { articles: any }) {
  console.log("fwfcazzocazzo", articles);

  return (
    <div className="flex justify-center px-7 ">
      <div className="relative grid-cols-1  lg:grid-cols-3 grid gap-6 w-full max-w-5xl min-h-[auto]">
        {articles.map((article: any) => (
          <div key={article.slug} className="">
            <a href={article.url} className="">
              <div className="flex items-center ">
                <div className="bg-gray-500 rounded-full  w-[3px] h-[3px] mr-[6px]" />
                <span className="uppercase text-gray-500 text-xs ">
                  {/* Mostro solo la prima categoria */}
                  {article.postCategories[0].title}
                </span>
              </div>
              <div className=" min-h-8 lg:min-h-[80px] md:min-h-8">
                <p className="text-3xl font-bold mt-auto ">{article.title}</p>
              </div>
              <div className="relative   ">
                <div className="">
                  <div className="aspect-auto flex items-baseline my-2 hover:opacity-70">
                    <img
                      className="w-full object-cover rounded-2xl z-10  "
                      src={article.featureImage[0].url}
                      height={500}
                      width={300}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesGrid;
