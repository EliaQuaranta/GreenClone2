import Navbar from "../components/Navbar";
import MainBlog from "../BlogComponents/MainBlog";
import MainComponent from "../BlogComponents/MainComponent";
export default function Blog() {
  return (
    <div className="blog">
      <Navbar></Navbar>
      <MainBlog></MainBlog>
      <MainComponent></MainComponent>
    </div>
  );
}
