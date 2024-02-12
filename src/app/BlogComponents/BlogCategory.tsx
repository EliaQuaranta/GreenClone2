import dayjs from "dayjs";
import ArticlesGrid from "./ArticlesGrid";
import MiddlePart from "./MiddlePart";
import pageArticles from "../_data/articles";

function BlogCategory({
  articles,
  category,
}: {
  articles: any;
  category: any;
}) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl">
        <div className="text-center text-3xl py-10 font-bold">
          {category.title}
        </div>
        <ArticlesGrid articles={articles} />
        <hr />
        <MiddlePart articles={pageArticles} />
      </div>
    </div>
  );
}

export default BlogCategory;
