import Navbar from "../components/Navbar";
import MainBlog from "../BlogComponents/MainBlog";
import MainComponent from "../BlogComponents/MainComponent";
import ArticlesSlider from "../BlogComponents/ArticlesSlider";
import ArticlesGrid from "../BlogComponents/ArticlesGrid";
import MiddlePart from "../BlogComponents/MiddlePart";
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
      title: "Test Articolo 5",
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
    {
      title: "Test Articolo 5",
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
    {
      title: "Test Articolo 5",
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
    {
      title: "Test Articolo 5",
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
    {
      title: "Test Articolo 5",
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
    {
      title: "Test Articolo 5",
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
    {
      title: "Test Articolo 5",
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
