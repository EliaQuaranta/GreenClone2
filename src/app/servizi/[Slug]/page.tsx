async function sottoServiziCMS(slug: string) {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `
    query MyQuery ($slug: [String] = "${slug}") {
        entries(section: "pages", slug: $Slug) {
          ... on pages_certificatoPages_Entry {
            pageBlocks {
              ... on pageBlocks_textBlock_BlockType {
                textBlockInfos {
                  ... on textBlockInfos_BlockType {
                    textBoxLink
                    textBoxText
                    textBoxTitle
                    textBoxIcon {
                      url
                    }
                  }
                }
              }
              
              }

            }
          }
        }
      
      
        `,
    cache: "no-cache",
  });

  let blogPosts = await results.json();
  console.log("blogPost", blogPosts.data);
  return blogPosts.data;
}

export default async function sottoServizi({
  params,
}: {
  params: { slug: any };
}) {
  const link = await sottoServiziCMS(params.slug);
  const SottoPagina = link.entries;

  if (SottoPagina) {
    return <div className="">ciao</div>;
  } else {
    // Return "not found" message if category is not found
    return <div>Category not found</div>;
  }
}
