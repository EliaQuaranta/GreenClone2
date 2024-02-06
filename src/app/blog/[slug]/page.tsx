import { title } from "process";
import pageArticles from "../../_data/articles";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      My Post:
      {params.slug}
      <img
        className="  rounded-xl opacity-80 w-full"
        src={article.image}
        alt="Art 10 prompt"
        height={800}
        width={1000}
        loading="eager"
        decoding="async"
      ></img>
    </div>
  );
}
