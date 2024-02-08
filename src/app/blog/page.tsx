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
        <div className="relative max-w-5xl border-b pb-10 ">
          <ArticlesSlider articles={sliderArticles} />
        </div>
      </div>

      <MiddlePart />

      <ArticlesGrid articles={gridArticles} />
    </div>
  );
}
