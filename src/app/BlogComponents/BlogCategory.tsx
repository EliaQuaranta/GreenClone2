import ArticlesGrid from "./ArticlesGrid";
import MiddlePart from "./MiddlePart";

function BlogCategory({
  articles,
  categorie,
}: {
  articles: any;
  categorie: any;
}) {
  console.log("fwfwfwwfwwfwfw", categorie);
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl">
        <MiddlePart categories={categorie} />

        <div className="text-center text-4xl py-10 font-bold">
          articoli proposti:{categorie.title}
        </div>
        <div>
          <ArticlesGrid articles={articles} />
        </div>
      </div>
    </div>
  );
}

export default BlogCategory;
