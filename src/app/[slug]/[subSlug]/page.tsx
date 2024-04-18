import Banner from "../../_components/PagesComponents/Banner";
import CertificatoServizi from "../../_components/PagesComponents/SponsorBanner";
import CheckUpServizi from "../../_components/PagesComponents/CheckUpServizi";
import TextBoxesService from "../../_components/PagesComponents/TextBoxesPages";
import TextImgServizi from "../../_components/PagesComponents/TextImgPages";
import WorkSpacee from "../../_components/PagesComponents/ImageSpace";
import React from "react";
import { client } from "../../../sanity/lib/client";

async function getSubPages(subSlug: any) {
  const query = `
  *[_type == "pages" && slug.current == "${subSlug}"] {
    _id,
    title,
    _createdAt,
    _updatedAt,
    slug {
      current
    },
    pageBuilder[] {
      ...,
      _type == 'textImg' => {
        blockTitle,
        blockSubtitle,
        imagePosition,
        blockText,
        "images": image[].asset->{
          url
        }
      },
      _type == 'textBlocks' => {
        blocks[] {
          heading,
          label,
          link
        }
      },
      _type == 'workSpace' => {
        "image": image.asset->{
         
          url
        }
      },
      _type == 'hero' => {
        buttonText,
        text
      },
      _type == 'banner' => {
        textBanner,
        "image": image.asset->{
          _ref,
          url
        }
      },
      _type == 'checkUps' => {
        label,
        form,
        heading
      }
    },
    "parent": Parent->{
      title
    }
  }
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
