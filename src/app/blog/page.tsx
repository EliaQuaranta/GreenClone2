import MainBlog from "../BlogComponents/MainBlog";
import ArticlesSlider from "../BlogComponents/ArticlesSlider";
import ArticlesGrid from "../BlogComponents/ArticlesGrid";
import MiddlePart from "../BlogComponents/MiddlePart";

async function getCmsArticlesAndCategories() {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `
    query MyQuery {
      entries {
        author {
          id
          fullName
          photo {
            url
          }
        }
        title
        url
        ... on blog_blogArticle_Entry {
          id
          fullPostContent
          slug
          url
          shortDescription
          featureImage {
            url
            ... on hardDisk2_Asset {
              id
              url
            }
          }
          postCategories {
            title
            slug
            url
          }
        }
        
      }
      categories {
        title
        slug
        url
      }
    }
    
      `,
    cache: "no-cache",
  });

  let blogPosts = await results.json();
  console.log("blogPost", blogPosts.data);
  return blogPosts.data; // <-- non blogpost ma blogpost.data.entries cosi restituisci direttamente l'array di articoli
}

export default async function Blog() {
  // attendi la risposta della Promise restituita da getAllArticles
  const cmsData = await getCmsArticlesAndCategories();

  const articles = cmsData.entries;
  const categories = cmsData.categories;

  const articless = articles.slice(0, 3);
  const articlesss = articles.slice(3);
  return (
    <div className="blog">
      <MainBlog></MainBlog>
      <div className="flex justify-center">
        <div className="relative max-w-5xl border-b pb-[57px] ">
          <ArticlesSlider articoli={articless} />
        </div>
      </div>
<<<<<<< HEAD
      <div>
        {/* Assicurati di avere un array di articoli da passare come prop */}
        <MiddlePart categories={categories}></MiddlePart>
        <div className="flex justify-center text-4xl font-bold">
          NEWS AND TUTORIAL
        </div>
        <div className="flex justify-center text-center text-xl py-10">
          Scopri come utilizzare al meglio i nostri strumenti ed esercitati con
          i tutorial
        </div>
        <ArticlesGrid articles={articlesss} />
      </div>
=======

      <MiddlePart />

      <ArticlesGrid articles={gridArticles} />
>>>>>>> 0e518e4a3f0a78c010bcfdd2212167cb8040f1e2
    </div>
  );
}
