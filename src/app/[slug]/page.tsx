import CertificatoServizi from "../_components/PagesComponents/SponsorBanner";
import CheckUpServizi from "../_components/PagesComponents/CheckUpServizi";
import TextBoxesService from "../_components/PagesComponents/TextBoxesPages";
import TextImgServizi from "../_components/PagesComponents/TextImgPages";
import WorkSpacee from "../_components/PagesComponents/ImageSpace";
import Banner from "../_components/PagesComponents/Banner";
import React from "react";

async function getPages(slug: any) {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `
    query MyQuery {
      entry(section: "pages", slug: "${slug}") {
        url
        title
        ... on pages_certificatoPages_Entry {
          title
          slug
          pageBlocks {
            ... on pageBlocks_textBlock_BlockType {
              typeHandle
              textBlockInfos {
                ... on textBlockInfos_BlockType {
                  textBoxLink
                  textBoxText
                  textBoxTitle
                  slug
                  textBoxIcon {
                    url
                  }
                }
              }
            }
            ... on pageBlocks_textImg_BlockType {
              blockText
              typeHandle
              blockButtonText
              blockLink
              blockTitle
              blockSubtitle
              blockImg {
                url
                slug
              }
              imagePosition(label: false)
            }
            ... on pageBlocks_checkUpButton_BlockType {
              typeHandle
              checkUpLink
              CheckUpButtonText
              checkUptext
            }
            ... on pageBlocks_certificato_BlockType {
              typeHandle
              firstSponsorText
              secondSponsorText
              mainTitle
              firstSponsorImage {
                url
              }
              secondSponsorImage {
                url
              }
            }
            ... on pageBlocks_workSpaceImage_BlockType {
              typeHandle
              id
              WorkSpaceImage {
                url
              }
            }
            ... on pageBlocks_banner_BlockType {
              typeHandle
              bannerTitle
              banner {
                url
              }
            }
          }
        }
      }
    }
    
      `,
  });

  let cmsData = await results.json();

  return cmsData.data.entry;
}

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

  return data.map((post: any) => {
    return { slug: post.slug };
  });
}

export default async function Page({ params }: { params: { slug: any } }) {
  const pages = await getPages(params.slug);

  return (
    <div>
      {pages && pages.pageBlocks
        ? pages.pageBlocks.map((block: any) => {
            if (block.typeHandle == "banner") return <Banner Info={block} />;
            if (block.typeHandle == "textBlock")
              return <TextBoxesService Info={block} />;
            if (block.typeHandle == "checkUpButton")
              return <CheckUpServizi Info={block} />;
            if (block.typeHandle == "textImg")
              return <TextImgServizi infos={block} />;
            if (block.typeHandle == "certificato")
              return <CertificatoServizi Info={block} />;
            if (block.typeHandle == "workSpaceImage")
              return <WorkSpacee Info={block} />;
          })
        : ""}
    </div>
  );
}
