import React from "react";

function RelatedArticles({ articles }: { articles: any }) {
  console.log("relatedArticles", articles);
  return (
    <div className="flex justify-center">
      <div className="relative grid-cols-1  lg:grid-cols-3 grid gap-6 w-full max-w-5xl min-h-[auto]">
        {articles.map((article: any) => (
          <div key={article}>
            <a href={article.url}>
              <div className="flex items-center">
                <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
                <span className="uppercase text-gray-500 text-xs">
                  {/* Mostro solo la prima categoria */}
                  {article.post}
                </span>
              </div>
              <div className=" min-h-8 lg:min-h-[80px] md:min-h-8">
                <p className="text-3xl font-bold mt-auto ">{article.title}</p>
              </div>

              <div className="relative mb-16">
                <div className="">
                  <div className="aspect-auto">
                    <img
                      className="hover:opacity-80 w-full object-cover rounded-2xl z-10 relative"
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

export default RelatedArticles;
