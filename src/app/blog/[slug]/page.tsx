import createContext from "react";
import { title } from "process";
import pageArticles from "../../_data/articles";
import Categories from "@/app/_data/categories";
import BlogCategory from "@/app/BlogComponents/BlogCategory";
import BlogDetails from "@/app/BlogComponents/BlogDetails";
import dayjs from "dayjs";
import MiddlPart from "@/app/BlogComponents/MiddlePart";

async function Blogpost(slug: string) {
  let results = await fetch("https://my-craft-project.ddev.site/api", {
    method: "POST",

    headers: {
      "Content-Type": "application/graphql",
    },

    body: `


    query MyQuery2 {
      entry(slug: "${slug}") {
        id
        ... on blog_blogArticle_Entry {
          id
          title
          shortDescription
          fullPostContent
          url
          slug
          author {
            fullName
            photo {
              url
              title
            }
          }
          postCategories {
            slug
            title
            url
          }
          featureImage {
            url
            title
          }
        }
      }
    
    }
    `,
  });
  let blogPost = await results.json();
  console.log("blogPost", blogPost.data);
  return blogPost;
}

export default async function Page({ params }: { params: { slug: any } }) {
  //cerca se esiste un articolo con lo slug ricevuto

  //const article: any = pageArticles.find(function (checkArticle) {
  /* if (params.slug == checkArticle.slug) return true;
    else return false;
  });*/

  //se trovato ritorna il layout del dettaglio del articolo

  const article = await Blogpost(params.slug);

  if (article)
    return (
      <div className="w-full top-0 z-50">
        <div className="flex justify-center">
          <img
            src={article.featureImage}
            alt="Descrizione dell'immagine"
            className=" object-cover w-full opacity-80 h-[500px]"
          />
          <div className="flex justify-center">
            <div className="w-full max-w-5xl shrink">
              <div className="absolute  text-center justify-center inset-0  flex flex-col items-center ">
                <p className="bg-white mb-20  rounded-full p-4 text-xl font-bold text-black">
                  {article.title}
                </p>
                <p className="text-4xl font-bold  text-white ">
                  {article.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center px-7 lg:px-0 text-center">
          <div className="max-w-5xl w-full  ">
            <div className="rounded-2xl p-0 flex items-center bg-white z-10 flex-col  ">
              <a
                className=" max-w-5xl w-full lg:1/2 self-stretch flex-1 aspect-auto flex items-center"
                href="/it/blog/10-prompt-per-generare-immagini-ia-con-risultati-garantiti"
              ></a>
              <div className="flex-1">
                <div className="">
                  <div className="flex my-6"></div>

                  <div className="text-lg text-gray font-semibold  ">
                    {article.shortDescription}
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <img
                      className="h-full w-full my-10 object-cover rounded-full max-w-[55px]"
                      src={article.author.photo}
                      alt="Logo round web"
                      height={2304}
                      width={2305}
                      loading="eager"
                      decoding="async"
                    />
                    <div>
                      <p className="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6 capitalize">
                        {article.author.fullName}
                      </p>
                      <p className="text-sm font-bold">
                        {dayjs(article.date).format("DD/MM/YYYY")}
                      </p>
                    </div>
                  </div>
                  <img
                    className="  rounded-xl opacity-80 w-full"
                    src={article.featureImage}
                    alt="Art 10 prompt"
                    height={800}
                    width={1000}
                    loading="eager"
                    decoding="async"
                  ></img>
                  <div className=" pt-10 text-2xl text-black font-semibold ">
                    {article.fullPostContent}
                    <div className=" ">
                      <p className="py-[30px] text-start text-[16px] text-gray-600">
                        Oggi, archeologi hanno annunciato una scoperta
                        straordinaria nelle remote regioni delle Pirenei. <br />{" "}
                        Mentre esploravano una caverna nascosta, gli esperti
                        hanno trovato una serie di antichi manufatti che
                        sembrano provenire da una civiltà extraterrestre
                        sconosciuta. Le strane strutture metalliche e i simboli
                        intricati incisi sui manufatti hanno stupito gli
                        studiosi, <br />
                        che ritengono che questi reperti possano essere la prova
                        di un incontro tra antiche civiltà terrestri e
                        visitatori alieni. <br /> Gli archeologi stanno
                        attualmente lavorando per decifrare il significato dei
                        simboli e determinare l'origine di questi misteriosi
                        manufatti. <br />
                        Le prime analisi preliminari indicano che i manufatti
                        risalgono a migliaia di anni fa e potrebbero essere
                        collegati a una cultura sconosciuta che aveva conoscenze
                        avanzate e tecnologie oltre la comprensione umana
                        dell'epoca. <br /> Questa scoperta sta attirando
                        l'attenzione della comunità scientifica internazionale,
                        aprendo nuove prospettive sulla storia <br /> del nostro
                        pianeta e sul possibile coinvolgimento di entità
                        extraterrestri nella nostra evoluzione.
                      </p>
                      <hr />
                    </div>
                  </div>
                  <div>
                    <MiddlPart articles={pageArticles}></MiddlPart>
                  </div>
                  <hr />
                </div>
                <div className=" text-start pt-[40px] ">
                  <BlogDetails articles={pageArticles}></BlogDetails>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  //sort e splice e ordinare in base alla data ultimi 3 usciti

  //cerca se esiste 1 categoria con lo slug

  const category: any = Categories.find(
    (checkCategory) => params.slug == checkCategory.slug
  );

  //se esiste la categoria cerca tutti gli articoli collegati a questa categoria
  // e ritorna il layout articlesgrid passando gli articoli

  if (category) {
    const categoryArticles = pageArticles.filter((checkarticle) =>
      checkarticle.categories.some(
        (categories) => categories.slug == category.slug
      )
    );

    return <BlogCategory articles={categoryArticles} category={category} />;
  }

  //altrimenti ritorna not found
  else return <div>not found</div>;
}

//w-full opacity-80 object-cover h-[500px]"
