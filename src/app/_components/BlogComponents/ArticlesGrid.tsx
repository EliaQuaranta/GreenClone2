function ArticlesGrid({
  articles,
  category,
}: {
  articles: any[];
  category: any;
}) {
  console.log("sanityCMS", category);

  return (
    <div className="flex justify-center px-7 ">
      <div className="relative grid-cols-1  lg:grid-cols-3 grid gap-6 w-full max-w-5xl min-h-[auto]">
        {articles.map((article: any) => (
          <div key={article.title} className="">
            <a href={article.postUrl} className="">
              <div className="flex items-center ">
                <div className="bg-gray-500 rounded-full  w-[3px] h-[3px] mr-[6px]" />
                <div>{category[0].title}</div>
                <span className="uppercase text-gray-500 text-xs ">
                  {category.slug}
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
                      src={article.imageUrl}
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
