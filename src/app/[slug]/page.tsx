import CertificatoServizi from "../_components/PagesComponents/SponsorBanner";
import CheckUpServizi from "../_components/PagesComponents/CheckUpServizi";
import TextBoxesService from "../_components/PagesComponents/TextBoxesPages";
import TextImgServizi from "../_components/PagesComponents/TextImgPages";
import WorkSpacee from "../_components/PagesComponents/ImageSpace";
import Banner from "../_components/PagesComponents/Banner";
import React from "react";
import { client } from "@/sanity/lib/client";

const getPages = async (slug: any) => {
  const query = `
  *[_type == "pages" && slug.current == "${slug}"] {
    _id,
    title,
    _createdAt,
    updatedAt,
   
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
          _ref,
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

  const blogPost = await client.fetch(query);
  console.log("sessopazzo", blogPost);
  return blogPost;
};
export default async function Page({ params }: { params: { slug: any } }) {
  const pages = await getPages(params.slug);

  return (
    <div>
      {pages && pages.length > 0 && pages[0].pageBuilder
        ? pages[0].pageBuilder.map((block: any) => {
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
        : "no pages found"}
    </div>
  );
}
