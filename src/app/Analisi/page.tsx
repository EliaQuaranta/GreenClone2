import TextImgServizi from "./AnalisiComponents/TextImgAnalisi";

async function AnalisiCms() {
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

export default async function Analisi() {
  const text = AnalisiCms();
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
              <TextImgServizi infos={undefined}></TextImgServizi>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*  
    const CMS = await getCmsText();
    const TextBlock = CMS.entries;
    const textBlocks = TextBlock[0].pageBlocks;
    const firstPageBlock = textBlocks[0];
    const secondPageBlock = textBlocks[1];
    const thirdPageBlock = textBlocks[2];
    const certificato = textBlocks[3];
    const TexImg = textBlocks[4];
    const WorkSpace = textBlocks[5];
    */
}
