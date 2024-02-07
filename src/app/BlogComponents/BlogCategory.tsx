import dayjs from "dayjs";
import ArticlesGrid from "./ArticlesGrid";

function BlogCategory({
  articles,
  category,
}: {
  articles: any[];
  category: any;
}) {
  return (
    <div>
      {category.title}

      <ArticlesGrid articles={articles} />
    </div>
  );
}

export default BlogCategory;
