import Navbar from "../components/Navbar";
import MainBlog from "../BlogComponents/MainBlog";
import MainComponent from "../BlogComponents/MainComponent";
import ArticlesSlider from "../BlogComponents/ArticlesSlider";
export default function Blog() {
  return (
    <div className="blog">
      <MainBlog></MainBlog>
      <ArticlesSlider />
      <MainComponent></MainComponent>
    </div>
  );
}
