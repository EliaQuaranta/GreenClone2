import { CheckUpForm } from "../components/CheckUpForm";
import Checkup from "../components/Checkup";
import TextImgcomponent from "../components/TextImgcomponent";
import CertificatoServizi from "./ComponentsServizi/CertificatoServizi";

import CheckUpServizi from "./ComponentsServizi/CheckUpServizi";
import TextBoxesService from "./ComponentsServizi/TextBoxesService";
import TextImgServizi from "./ComponentsServizi/TextImgServizi";
import util from "util";
import TextImgServizi2 from "./ComponentsServizi/TextImgServizi2";
import WorkSpacee from "./ComponentsServizi/WorkSpace";

async function getCmsText() {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `
    query MyQuery {
      entries(section: "pages") {
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
            ... on pageBlocks_textImg_BlockType {
              blockTitle
              blockSubtitle
              blockImg {
                url
              }
            }
            ... on pageBlocks_checkUpButton_BlockType {
              CheckUpButtonText
              checkUptext
            }
            ... on pageBlocks_certificato_BlockType {
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
              id
              WorkSpaceImage {
                url
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

  console.dir(blogPosts, { depth: null });
  return blogPosts.data;
}

export default async function Servizi() {
  const CMS = await getCmsText();
  const TextBlock = CMS.entries;
  const textBlocks = TextBlock[0].pageBlocks;
  const firstPageBlock = textBlocks[0];
  const secondPageBlock = textBlocks[1];
  const thirdPageBlock = textBlocks[2];
  const certificato = textBlocks[3];
  const TexImg = textBlocks[4];
  const WorkSpace = textBlocks[5];
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="">
            <div className="text-center font-bold text-2xl">
              I nostri servizi
            </div>
            <div className="text-center font-bold text-3xl">
              "<span className="text-primary">Alsafi </span>is the way"
            </div>
            <TextBoxesService Info={firstPageBlock} />;
            <CheckUpServizi Info={secondPageBlock}></CheckUpServizi>
            <TextImgServizi infos={thirdPageBlock}></TextImgServizi>
            <CertificatoServizi Info={certificato}></CertificatoServizi>
            <TextImgServizi2 infos={TexImg}></TextImgServizi2>
            <WorkSpacee Info={WorkSpace}></WorkSpacee>
          </div>
        </div>
      </div>
    </div>
  );
}

/* const 
--------------------------------------------------------------------

      
      <TextImgServizi2 infos={TextImg}></TextImgServizi2>
      <CheckUpForm></CheckUpForm>
      ----------------------------------------------------------------

     <TextImgServizi2 infos={TextImg}></TextImgServizi2>
      <CheckUpForm></CheckUpForm>
<TextImgServizi infos={TextImg}></TextImgServizi>
  
  <div className="flex justify-center"                      >
          <div className="w-full">
            <CheckUpServizi></CheckUpServizi>
          </div>
        </div>
        <TextImgcomponent
          title="Specializzati in Pubblicità online"
          subtitle="“Vuoi dare valore ai tuoi soldi e al tuo business? Scegli Green.Click Specializzati in Pubblicità online
        Vuoi dare valore ai tuoi soldi e al tuo business? Scegli Green.Click
        Da noi parli sempre con tecnici specializzati e hai il tuo team di riferimento. Ascoltiamo  le tue esigenze e sviluppiamo insieme a te la strategia più adeguata ai tuoi obiettivi e al tuo brand. Lavoriamo sempre negli account del cliente perchè tutto quello che viene fatto rimanga sempre di sua proprietà!"
          imagePosition=""
          images={["/green-click-case-history-brand-lusso-2-800x600.jpg"]}
        />
        <div className="flex justify-center py-4">
          <div className="w-full max-w-5xl">
            <img
              src="/green-click-case-history-brand-lusso-2-800x600.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <TextImgcomponent
            title="Specializzati in Pubblicità online"
            subtitle="“Vuoi dare valore ai tuoi soldi e al tuo business? Scegli Green.Click Specializzati in Pubblicità online
        Vuoi dare valore ai tuoi soldi e al tuo business? Scegli Green.Click
        Da noi parli sempre con tecnici specializzati e hai il tuo team di riferimento. Ascoltiamo  le tue esigenze e sviluppiamo insieme a te la strategia più adeguata ai tuoi obiettivi e al tuo brand. Lavoriamo sempre negli account del cliente perchè tutto quello che viene fatto rimanga sempre di sua proprietà!"
            imagePosition="left"
            images={[
              "/green-click-case-history-brand-lusso-2-800x600.jpg",
              "/ecommerce-costumi-da-bagno-greenclick-1-800x600.jpg",
              "/ecommerce-costumi-da-bagno-greenclick-1-800x600.jpg",
              "/ecommerce-costumi-da-bagno-greenclick-1-800x600.jpg",
            ]}
          />
        </div>

        <div>
          
        </div> */
