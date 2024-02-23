import BlogCategory from "@/app/BlogComponents/BlogCategory";

import dayjs from "dayjs";
<<<<<<< HEAD
import MiddlPart from "@/app/BlogComponents/MiddlePart";
import ArticlesGrid from "@/app/BlogComponents/ArticlesGrid";
import RelatedArticles from "@/app/BlogComponents/RelatedArticles.";
import ArticleDetail from "@/app/BlogComponents/ArticleDetail";

async function getBlogPost(slug: string) {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
=======
>>>>>>> 0e518e4a3f0a78c010bcfdd2212167cb8040f1e2

    headers: {
      "Content-Type": "application/graphql",
    },

    body: `
    query MyQuery($slug: [String] = "${slug}") {
      entry(slug: $slug) {
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
          
          }
          postCategories {
            ... on topics_Category {
              title
              slug
              url
            }
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
  });
  let blogPost = await results.json();
  console.log("blogPost", blogPost.data);
  return blogPost.data;
}
async function getRelatedArticles() {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",

    headers: {
      "Content-Type": "application/graphql",
    },

    body: `
    query MyQuery {
    entries(orderBy: "postDate", limit: 3) {
      id
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
          ... on topics_Category {
            title
            slug
            url
          }
        }
      }
    }
  }
  
    
    `,
  });
  let blogPost = await results.json();
  console.log("blogPost", blogPost.data);
  return blogPost.data.entries;
}
async function getCategory(slug: any) {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",

    headers: {
      "Content-Type": "application/graphql",
    },

    body: `
    query MyQuery {
      category(slug: "${slug}") {
        title
        url
        slug
      }
      
    }
    
    `,
  });
  let blogPost = await results.json();
  console.log("blogPost", blogPost.data);
  return blogPost.data.category;
}
async function getCategorizedArticle(slug: any) {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",

    headers: {
      "Content-Type": "application/graphql",
    },

    body: `query MyQuery {
      entries(relatedToCategories: {slug: "${slug}"}) {
        title
        url
        slug
        uri
        ... on blog_blogArticle_Entry {
          id
          featureImage {
            url
            title
          }
          postCategories {
            title
            slug
            url
          }
        }
      }
    }
    
    `,
  });
  let blogPost = await results.json();
  console.log("blogPost1111", blogPost.data);
  return blogPost.data.entries;
}
export default async function page({ params }: { params: { slug: any } }) {
  const Articoloni = await getBlogPost(params.slug);
  const article = Articoloni.entry;
  const categorie = Articoloni.categories;

  if (article) {
    const relatedArticles = await getRelatedArticles();
    console.log("wwfdwwdqdqw", relatedArticles);
    return (
      <div className="">
        <div className="">
          <ArticleDetail articles={article}></ArticleDetail>
        </div>
<<<<<<< HEAD
        <div>
          <MiddlPart categories={categorie}></MiddlPart>
        </div>
        <div className="flex justify-center">
          <div className="max-w-5xl w-full">
            <hr />
=======
        <div className="flex justify-center px-7 lg:px-0">
          <div className="max-w-5xl w-full  ">
            <div className="rounded-2xl p-0 flex items-center bg-white z-10 flex-col  ">
              <a
                className=" max-w-5xl w-full lg:1/2 self-stretch flex-1 aspect-auto flex items-center"
                href="/it/blog/10-prompt-per-generare-immagini-ia-con-risultati-garantiti"
              ></a>
              <div className="flex-1">
                <div className="">
                  <div className="flex mb-3"></div>
                  <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5">
                    <a href={article.url}>{article.title}</a>
                  </h2>
                  <div className="text-text text-gray-500 ">
                    <p>{article.shortDescription}</p>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <img
                      className="h-full w-full my-10 object-cover rounded-full max-w-[55px]"
                      src={article.author.image}
                      alt="Logo round web"
                      height={2304}
                      width={2305}
                      loading="eager"
                      decoding="async"
                    />
                    <div>
                      <p className="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6 capitalize">
                        {article.author.name}
                      </p>
                      <p className="text-sm font-bold">
                        {dayjs(article.date).format("DD/MM/YYYY")}
                      </p>
                    </div>
                  </div>
                  <img
                    className="  rounded-xl opacity-80 w-full"
                    src={article.image}
                    alt="Art 10 prompt"
                    height={800}
                    width={1000}
                    loading="eager"
                    decoding="async"
                  ></img>
                  <div className="my-10 text-xl font-mono">
                    {article.shortDescription}
                  </div>
                </div>
              </div>
            </div>
>>>>>>> 0e518e4a3f0a78c010bcfdd2212167cb8040f1e2
          </div>
        </div>
        <div className="mt-12 ">
          <div className="text-center text-2xl font-semibold pb-10">
            {" "}
            I nostri articoli più recenti
          </div>
          <RelatedArticles articles={relatedArticles}></RelatedArticles>
        </div>
      </div>
    );
  }
  const category = await getCategory(params.slug);

<<<<<<< HEAD
  // If category esiste

  if (category) {
    //categoria

    const categorizedArticles = await getCategorizedArticle(params.slug);
    console.log("fwfwwfw", categorizedArticles);
    return (
      <div>
        <BlogCategory articles={categorizedArticles} categorie={categorie} />
      </div>
    );
  } else {
    // Return "not found" message if category is not found
    return <div>Category not found</div>;
  }
=======
  //cerca se esiste 1 categoria con lo slug

  const category: any = Categories.find(
    (checkCategory) => params.slug == checkCategory.slug
  );

  //se esiste la categoria cerca tutti gli articoli collegati a questa categoria
  // e ritorna il layout articlesgrid passando gli articoli

  if (category) {
    const categoryArticles = pageArticles.filter(
      (checkarticle) => category.slug == checkarticle.category.slug
    );

    return <BlogCategory articles={categoryArticles} category={category} />;
  }

  //altrimenti ritorna not found
  else return <div>not found</div>;

  return;
>>>>>>> 0e518e4a3f0a78c010bcfdd2212167cb8040f1e2
}
