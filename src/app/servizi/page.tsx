import { CheckUpForm } from "../components/CheckUpForm";
import Checkup from "../components/Checkup";
import TextImgcomponent from "../components/TextImgcomponent";
import CertificatoServizi from "./ComponentsServizi/CertificatoServizi";

import CheckUpServizi from "./ComponentsServizi/CheckUpServizi";
import TextBoxesService from "./ComponentsServizi/TextBoxesService";
import TextImgServizi from "./ComponentsServizi/TextImgServizi";
import util from "util";
async function getCmsInfo() {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `
    query MyQuery {
      serviziEntries {
        ... on servizi_default_Entry {
          id
          slug
          title
          url
          featureImage {
            id
          }
          author {
            fullName
            photo {
              ... on hardDisk2_Asset {
                id
                url
              }
            }
          }
          fullPostContent
          shortDescription
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
async function getCmsTextImg() {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `
    query MyQuery {
      entries(section: "pages") {
        ... on pages_default_Entry {
          pageBlocks {
            ... on pageBlocks_textImg_BlockType {
              blockTitle
              subtitle
              img {
                url
              }
            }
          }
          url
          title
          slug
        }
      }
    }
    
    
      `,
    cache: "no-cache",
  });

  let blogPosts = await results.json();
  console.log("blogPostttttttttttt", blogPosts);
  return blogPosts.data.entries;
}
async function getCmsCertificato() {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `
    query MyQuery {
      pagesEntries {
        ... on pages_certificatoPages_Entry {
          id
          title
          fullPostContent
        }
      }
    }
    
    
    
      `,
    cache: "no-cache",
  });

  let blogPosts = await results.json();
  console.log("blogPostttttttttttt", blogPosts);
  return blogPosts.data;
}
export default async function Servizi() {
  const Info = await getCmsInfo();
  const Certificato = await getCmsCertificato();
  const TextImg = await getCmsTextImg();
  console.table(JSON.stringify(TextImg, null, 2));
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="max-w-5xl w-full ">
            <TextBoxesService Info={Info}></TextBoxesService>
          </div>
        </div>
        <CheckUpServizi></CheckUpServizi>
      </div>

      <TextImgServizi infos={TextImg}></TextImgServizi>
      <CertificatoServizi certificato={Certificato}></CertificatoServizi>
      <TextImgServizi infos={TextImg}></TextImgServizi>
      <CheckUpForm></CheckUpForm>
    </div>
  );
}

/* const 
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
