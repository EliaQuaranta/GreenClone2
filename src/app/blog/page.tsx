import Navbar from "../components/Navbar";
import MainBlog from "../BlogComponents/MainBlog";
import MainComponent from "../BlogComponents/MainComponent";
import ArticlesSlider from "../BlogComponents/ArticlesSlider";
export default function Blog() {
  return (

    <div className="blog">
      <MainBlog></MainBlog>

      <ArticlesSlider
        section={"Test Slider"}
        linkarticle={"https://www.youtube.com/"}
        image={["/foto-def-logo.jpg"]}
        title={"Test Slider"}
        imageprofile={["/hand-made-green-click.jpg"]}
        subtitle={"Test Slider"}
      />
      </ArticlesGrid
    </div>
  );
}
«       