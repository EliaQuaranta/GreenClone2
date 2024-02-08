import dayjs from "dayjs";

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
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ArticlesGrid;
