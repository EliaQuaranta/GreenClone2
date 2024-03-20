import Header from "./_components/HomeComponents/Header";
import Checkup from "./_components/HomeComponents/CheckUp";
import TextBoxes from "./_components/HomeComponents/TextBoxes";
import TextImg from "./_components/HomeComponents/TextImg";
import TeamImage from "./_components/HomeComponents/TeamImage";
import WorkSpaceImage from "./_components/HomeComponents/WorkSpaceImage";

async function homeInfos() {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
    },
    body: `query MyQuery {
      entry(section: "home") {
        ... on home_Home_Entry {
          homeComponents {
            ... on homeComponents_textBoxesHome_BlockType {
              textboxesMainTitle
              textboxesMainSubtitle
              textBoxesInfos {
                ... on textBoxesInfos_BlockType {
                  textboxesContent
                  textboxesContentTitle
                }
              }
              typeHandle
            }
            ... on homeComponents_checkupSection_BlockType {
              checkupLink
              checkupText
              checkupButtonText
              typeHandle
            }
            ... on homeComponents_textImgHome_BlockType {
              id
              textimgTitle
              textimgSubtitle
              textimgImagePosition(label: false)
              textimgImage {
                url
              }
              typeHandle
            }
            ... on homeComponents_teamimageHome_BlockType {
              teamImage {
                url
              }
              typeHandle
            }
            ... on homeComponents_headerHome_BlockType {
              homeTitle
              homeSubTitle
              homeImage {
                url
              }
              typeHandle
            }
            ... on homeComponents_workspaceimage_BlockType {
              workspaceHomeImage {
                url
              }
              typeHandle
            }
          }
          typeHandle
        }
      }
    }
    
      `,
    cache: "no-cache",
  });

  let blogPosts = await results.json();
  //console.log("wfefwfewfw", blogPosts);
  return blogPosts.data.entry;
}

export default async function Home() {
  const homeInfo = await homeInfos();
  return (
    <div>
      {homeInfo.homeComponents.map((block: any) => {
        if (block.typeHandle == "textBoxesHome")
          return <TextBoxes info={block} />;
        if (block.typeHandle == "textImgHome") return <TextImg infos={block} />;
        if (block.typeHandle == "checkupSection")
          return <Checkup info={block} />;
        if (block.typeHandle == "teamimageHome")
          return <TeamImage info={block} />;
        if (block.typeHandle == "headerHome") return <Header info={block} />;
        if (block.typeHandle == "workspaceimage")
          return <WorkSpaceImage info={block} />;
      })}
    </div>
  );
}
