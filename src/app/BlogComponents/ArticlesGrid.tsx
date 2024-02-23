function ArticlesGrid({ articles }: { articles: any }) {
  console.log("fwfcazzocazzo", articles);

<<<<<<< HEAD
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
=======
function ArticlesGrid({ articles }: { articles: any[] }) {
  return (
    <div className="flex justify-center">
      <div className="relative grid-cols-1 px-10 md:px-0 lg:px-0 lg:grid-cols-3 grid gap-3 w-full max-w-5xl min-h-[auto]">
        {articles.map((articles: any) => (
          <a href={articles.url}>
            <div className="flex items-center">
              <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
              <span className="uppercase text-gray-500 text-xs">
                {articles.category.title}
              </span>
            </div>
            <p className="text-3xl font-chivo font-bold inline-block mb-[10px]">
              {articles.title}
            </p>
            <div className="relative mb-16">
              <div className="relative">
                <div className="aspect-auto">
                  <img
                    className=" w-full object-cover rounded-2xl z-10 relative"
                    src={articles.image}
                    height={500}
                    width={300}
                    loading="eager"
                    decoding="async"
                  />
>>>>>>> 0e518e4a3f0a78c010bcfdd2212167cb8040f1e2
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
