import RelatedArticles from "../../../src/app/_components/BlogComponents/RelatedArticles.";
import ArticleDetail from "../../../src/app/_components/BlogComponents/ArticleDetail";
import MiddlPart from "../../../src/app/_components/BlogComponents/CategoryButtons";
import BlogCategory from "../../../src/app/_components/BlogComponents/BlogCategory";
import React from "react";

async function getData() {
  const results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `query MyQuery {
      entries(section: "Blog") {
        slug
        
      }
      categories {
        slug
      }
    }
`,
    cache: "reload",
  });

  let cmsData = await results.json();

  return [...cmsData.data.entries, ...cmsData.data.categories];
}
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
    cache: "default",
  });
  let blogPost = await results.json();
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
  return blogPost.data.entries;
}

export async function generateStaticParams() {
  const data = await getData();

  return data.map((post: any) => {
    return { slug: post.slug };
  });
}

export default async function SubBlog({ params }: { params: { slug: any } }) {
  const data = await getBlogPost(params.slug);
  const articles = data.entry;
  const categories = data.categories;

  if (articles) {
    const relatedArticles = await getRelatedArticles();

    return (
      <div className="">
        <div className="">
          <ArticleDetail articles={articles}></ArticleDetail>
        </div>
        <div>
          <MiddlPart categories={categories}></MiddlPart>
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
  const articleCategory = await getCategory(params.slug);

  if (articleCategory) {
    const categorizedArticles = await getCategorizedArticle(params.slug);
    return (
      <div>
        <BlogCategory articles={categorizedArticles} categorie={categories} />
      </div>
    );
  } else {
    return <div>Categoeery not found</div>;
  }
}
