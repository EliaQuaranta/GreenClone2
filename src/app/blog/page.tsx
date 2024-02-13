import Navbar from "../components/Navbar";
import MainBlog from "../BlogComponents/MainBlog";

import ArticlesSlider from "../BlogComponents/ArticlesSlider";
import ArticlesGrid from "../BlogComponents/ArticlesGrid";
import MiddlePart from "../BlogComponents/MiddlePart";
import pageArticles from "../_data/articles";
export default function Blog() {
  const sliderArticles = pageArticles.slice(0, 3);
  const gridArticles = pageArticles.slice(3);

  return (
    <div className="blog">
      <MainBlog></MainBlog>
      <div className="flex justify-center">
        <div className="relative max-w-5xl border-b pb-[55px] ">
          <ArticlesSlider articles={sliderArticles} />
        </div>
      </div>
      <div>
        <MiddlePart articles={pageArticles} />
        <div className="flex justify-center text-4xl font-bold ">
          NEWS AND TUTORIAL
        </div>

        <div className="flex justify-center  text-center text-xl py-10">
          Scopri come utilizzare al meglio i nostri strumenti ed esercitati con
          i tutorial
        </div>
      </div>
      <div>
        <ArticlesGrid articles={gridArticles} />
      </div>
    </div>
  );
}
