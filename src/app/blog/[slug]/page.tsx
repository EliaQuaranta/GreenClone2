import BlogCategory from "@/app/BlogComponents/BlogCategory";

import dayjs from "dayjs";
import MiddlPart from "@/app/BlogComponents/MiddlePart";
import ArticlesGrid from "@/app/BlogComponents/ArticlesGrid";
import RelatedArticles from "@/app/BlogComponents/RelatedArticles.";
import ArticleDetail from "@/app/BlogComponents/ArticleDetail";

async function getBlogPost(slug: string) {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",

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
        <div>
          <MiddlPart categories={categorie}></MiddlPart>
        </div>
        <div className="flex justify-center">
          <div className="max-w-5xl w-full">
            <hr />
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
}
