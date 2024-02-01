import Navbar from "../components/Navbar";
import MainBlog from "../BlogComponents/MainBlog";
import MainComponent from "../BlogComponents/MainComponent";
import ArticlesSlider from "../BlogComponents/ArticlesSlider";
export default function Blog() {
  const pageArticles = [
    {
      title: "Test Articolo 1",
      date: new Date(2021, 10, 20),
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "https://storage.googleapis.com/alsafi-files/asktoai.com/6.jpg",
      url: "/blog/articolo-1",
      category: {
        title: "text catergory",
        url: "/blog/category-url",
      },
      author: {
        name: "Autore test",
        url: "/pagina-autore",
        image:
          "https://storage.googleapis.com/alsafi-files/asktoai.com/mino_2023-11-22-115406_wncn.jpg",
      },
    },
    {
      title: "Test Articolo 2",
      date: new Date(2023, 10, 20),
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "https://storage.googleapis.com/alsafi-files/asktoai.com/3.jpg",
      url: "/blog/articolo-2",
      category: {
        title: "text catergory",
        url: "/blog/category-url",
      },
      author: {
        name: "Autore test",
        url: "/pagina-autore",
        image:
          "https://storage.googleapis.com/alsafi-files/asktoai.com/mino_2023-11-22-115406_wncn.jpg",
      },
    },
    {
      title: "Test Articolo 3",
      date: new Date(2023, 4, 20),
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "https://storage.googleapis.com/alsafi-files/asktoai.com/6.jpg",
      url: "/blog/articolo-1",
      category: {
        title: "text catergory",
        url: "/blog/category-url",
      },
      author: {
        name: "Autore test",
        url: "/pagina-autore",
        image:
          "https://storage.googleapis.com/alsafi-files/asktoai.com/mino_2023-11-22-115406_wncn.jpg",
      },
    },
    {
      title: "Test Articolo 4",
      date: new Date(2022, 8, 15),
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "https://storage.googleapis.com/alsafi-files/asktoai.com/3.jpg",
      url: "/blog/articolo-2",
      category: {
        title: "text catergory",
        url: "/blog/category-url",
      },
      author: {
        name: "Autore test",
        url: "/pagina-autore",
        image:
          "https://storage.googleapis.com/alsafi-files/asktoai.com/mino_2023-11-22-115406_wncn.jpg",
      },
    },
  ];

  const sliderArticles = pageArticles.slice(0, 1);
  const gridArticles = pageArticles.slice(2);

  return (
    <div className="blog">
      <MainBlog></MainBlog>
      <ArticlesSlider articles={sliderArticles} />
    </div>
  );
}
