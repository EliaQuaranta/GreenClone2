async function getData() {
  const results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `query MyQuery {
        entries(section: "Pages", level: 1) {
          slug
          children {
            slug
            }
        }
      }
  `,
    cache: "default",
  });

  let cmsData = await results.json();

  return cmsData.data.entries;
}

export async function generateStaticParams() {
  const data = await getData();

  const allRoutes = data.map((post: any) => {
    return {
      slug: post.slug,
    };
  });
  console.log("allRoutes", allRoutes);
  return allRoutes;
}

export default function ({ children }: { children: any }) {
  return children;
}
