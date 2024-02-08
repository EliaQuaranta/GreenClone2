const pageArticles = [
  {
    title: "Test Articolo 1",
    date: new Date(2021, 10, 20),
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://storage.googleapis.com/alsafi-files/asktoai.com/6.jpg",
    url: "/blog/articolo-1",
    slug: "articolo-1",

    category: {
      title: "intelligenza artificiale",
      url: "/blog/AI",
      slug: "AI",
    },
  },
  {
    title: "Test Articolo 2",
    date: new Date(2023, 10, 20),
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://storage.googleapis.com/alsafi-files/asktoai.com/3.jpg",
    url: "/blog/articolo-2",
    slug: "articolo-2",
    category: {
      title: "intelligenza artificiale",
      url: "/blog/AI",
      slug: "AI",
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
    slug: "articolo-3",
    categories: [
      {
        title: "tutorial",
        url: "/blog/tutorial",
        slug: "tutorial",
      },

      {
        title: "intelligenza artificiale",
        url: "/blog/AI",
        slug: "AI",
      },
    ],

    author: {
      name: "Autore test",
      url: "/pagina-autore",
      image:
        "https://storage.googleapis.com/alsafi-files/asktoai.com/mino_2023-11-22-115406_wncn.jpg",
    },
  },
];

export default pageArticles;
