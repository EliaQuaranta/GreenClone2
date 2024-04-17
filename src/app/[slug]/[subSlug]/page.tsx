import Banner from "../../_components/PagesComponents/Banner";
import CertificatoServizi from "../../_components/PagesComponents/SponsorBanner";
import CheckUpServizi from "../../_components/PagesComponents/CheckUpServizi";
import TextBoxesService from "../../_components/PagesComponents/TextBoxesPages";
import TextImgServizi from "../../_components/PagesComponents/TextImgPages";
import WorkSpacee from "../../_components/PagesComponents/ImageSpace";
import React from "react";
import { client } from "../../../sanity/lib/client";

{
  /*const getData: any = async (slug: any) => {
  const query = `*[_type == 'pages' && !(_id in path('drafts.**'))] 
    
  
`;

  const getPages = await client.fetch(query);
  return getPages;
};

export async function generateStaticParams() {
  const data = await getData();

  const slugs = data.map((post: any) => ({
    subSlug: post.slug,
    slug: post.ancestors.slug,
  }));

  return slugs;
}
*/
}

async function getSubPages(subSlug: any) {
  const query = `
    *[_type == 'pages' && slug.current == "${subSlug}" ] 
  `;

  const params = { subSlug };
  const page = await client.fetch(query, params);
  console.log("SubSLUGGONE", page[0]);
  return page[0]; // Poiché si prevede di tornare una sola pagina.
}

export default async function Page({ params }: any) {
  const { slug, subSlug } = params;
  const subPages = await getSubPages(subSlug);

  return (
    <div>
      {subPages && subPages.pageBuilder
        ? subPages.pageBuilder.map((block: any) => {
            if (block._type == "banner") return <Banner Info={block} />;
            if (block._type == "textBlocks")
              return <TextBoxesService Info={block} />;
            if (block._type == "checkUps")
              return <CheckUpServizi Info={block} />;
            if (block._type == "textImg")
              return <TextImgServizi infos={block} />;
            if (block._type == "heroType")
              return <CertificatoServizi Info={block} />;
            if (block._type == "workSpaceImage")
              return <WorkSpacee Info={block} />;
          })
        : "sorry, page not found"}
    </div>
  );
}
