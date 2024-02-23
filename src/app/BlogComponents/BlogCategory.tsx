import ArticlesGrid from "./ArticlesGrid";
<<<<<<< HEAD
import MiddlePart from "./MiddlePart";
=======
>>>>>>> 0e518e4a3f0a78c010bcfdd2212167cb8040f1e2

function BlogCategory({
  articles,
  categorie,
}: {
<<<<<<< HEAD
  articles: any;
  categorie: any;
=======
  articles: any[];
  category: any;
>>>>>>> 0e518e4a3f0a78c010bcfdd2212167cb8040f1e2
}) {
  console.log("fwfwfwwfwwfwfw", categorie);
  return (
<<<<<<< HEAD
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
=======
    <div>
      {category.title}

      <ArticlesGrid articles={articles} />
>>>>>>> 0e518e4a3f0a78c010bcfdd2212167cb8040f1e2
    </div>
  );
}

export default BlogCategory;
