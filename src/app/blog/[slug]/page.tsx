import createContext from "react";
import { title } from "process";
import pageArticles from "../../_data/articles";
import Categories from "@/app/_data/categories";
import BlogCategory from "@/app/BlogComponents/BlogCategory";
import BlogDetails from "@/app/BlogComponents/BlogDetails";
import dayjs from "dayjs";
import ArticlesGrid from "@/app/BlogComponents/ArticlesGrid";
import Category from "@/app/_data/categories";

export default function Page({ params }: { params: { slug: any } }) {
  //cerca se esiste un articolo con lo slug ricevuto
  const article: any = pageArticles.find(function (checkArticle) {
    if (params.slug == checkArticle.slug) return true;
    else return false;
  });

  //se trovato ritorna il layout del dettaglio del articolo

  if (article)
    return (
      <div className="">
        <div className="w-full top-0 z-50  ">
          <img
            src={article.image}
            className="w-full opacity-80 object-cover h-[500px]"
            alt=""
          />
        </div>
        <div className="flex justify-center px-7 lg:px-0">
          <div className="max-w-5xl w-full  ">
            <div className="rounded-2xl p-0 flex items-center bg-white z-10 flex-col  ">
              <a
                className=" max-w-5xl w-full lg:1/2 self-stretch flex-1 aspect-auto flex items-center"
                href="/it/blog/10-prompt-per-generare-immagini-ia-con-risultati-garantiti"
              ></a>
              <div className="flex-1">
                <div className="">
                  <div className="flex mb-3"></div>
                  <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5">
                    <a href={article.url}>{article.title}</a>
                  </h2>
                  <div className="text-text text-gray-500 ">
                    {article.shortDescription}
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <img
                      className="h-full w-full my-10 object-cover rounded-full max-w-[55px]"
                      src={article.author.image}
                      alt="Logo round web"
                      height={2304}
                      width={2305}
                      loading="eager"
                      decoding="async"
                    />
                    <div>
                      <p className="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6 capitalize">
                        {article.author.name}
                      </p>
                      <p className="text-sm font-bold">
                        {dayjs(article.date).format("DD/MM/YYYY")}
                      </p>
                    </div>
                  </div>
                  <img
                    className="  rounded-xl opacity-80 w-full"
                    src={article.image}
                    alt="Art 10 prompt"
                    height={800}
                    width={1000}
                    loading="eager"
                    decoding="async"
                  ></img>
                  <div className="my-10 text-xl font-mono">
                    {article.shortDescription}
                    <div className="font-sans text-3xl ">
                      <p className="py-10">
                        Oggi, archeologi hanno annunciato una scoperta
                        straordinaria nelle remote regioni delle Pirenei. Mentre
                        esploravano una caverna nascosta, gli esperti hanno
                        trovato una serie di antichi manufatti che sembrano
                        provenire da una civiltà extraterrestre sconosciuta. Le
                        strane strutture metalliche e i simboli intricati incisi
                        sui manufatti hanno stupito gli studiosi, che ritengono
                        che questi reperti possano essere la prova di un
                        incontro tra antiche civiltà terrestri e visitatori
                        alieni. Gli archeologi stanno attualmente lavorando per
                        decifrare il significato dei simboli e determinare
                        l'origine di questi misteriosi manufatti. Le prime
                        analisi preliminari indicano che i manufatti risalgono a
                        migliaia di anni fa e potrebbero essere collegati a una
                        cultura sconosciuta che aveva conoscenze avanzate e
                        tecnologie oltre la comprensione umana dell'epoca.
                        Questa scoperta sta attirando l'attenzione della
                        comunità scientifica internazionale, aprendo nuove
                        prospettive sulla storia del nostro pianeta e sul
                        possibile coinvolgimento di entità extraterrestri nella
                        nostra evoluzione.
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>
                <div>
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
