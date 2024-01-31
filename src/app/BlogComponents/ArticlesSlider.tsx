export default function ArticlesSlider() {
  return (
    <div className="flex justify-center">
      <div
        className="relative grow max-w-5xl min-h-[auto]  "
        tabIndex={-1}
        style={{ width: "100%", display: "inline-block" }}
      >
        <div className="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row">
          <a
            className="block self-stretch flex-1 aspect-auto"
            href="/it/blog/10-prompt-per-generare-immagini-ia-con-risultati-garantiti"
          >
            <img
              className="h-full w-full object-cover rounded-2xl opacity-80"
              src="https://storage.googleapis.com/alsafi-files/asktoai.com/art-10-prompt.jpg"
              alt="Art 10 prompt"
              height={800}
              width={1200}
              srcSet="https://storage.googleapis.com/alsafi-files/asktoai.com/googlecloud/17067/art-10-prompt_5f28a37dfffeac17d8504dfc1bc3d34b.webp 200w, https://storage.googleapis.com/alsafi-files/asktoai.com/googlecloud/17067/art-10-prompt_616b2c32fb7bb9679ad560fc61635847.webp 400w, https://storage.googleapis.com/alsafi-files/asktoai.com/googlecloud/17067/art-10-prompt_5472332afa344033d2bf9e7b6b9d883e.webp 600w"
              loading="eager"
              decoding="async"
            />
          </a>
          <div className="flex-1">
            <div className="my-[60px] mr-[50px]">
              <div className="flex mb-3">
                <a
                  className=" ml-1 items-center z-10 relative transition-all duration-200 group px-[8px] py-[6px] lg:px-[10px] lg:py-[6px] rounded-[50px] bg-white text-gray-900 hover:text-green-900 white ring-2 ring-black"
                  href="/it/blog/intelligenza-artificiale"
                >
                  <span className="block text-inherit w-full h-full rounded-[50px] text-xs font-bold font-chivo ">
                    Intelligenza Artificiale
                  </span>
                </a>
              </div>
              <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5">
                <a href="/it/blog/10-prompt-per-generare-immagini-ia-con-risultati-garantiti">
                  10 prompt per generare immagini IA con risultati garantiti
                </a>
              </h2>
              <div className="text-text text-gray-500 mb-[44px]">
                <p>
                  Questo articolo si propone come una guida per chiunque voglia
                  sfruttare al meglio le capacità di{" "}
                  <strong>ASKtoAI Image</strong>. Non un semplice elenco, ma{" "}
                  <strong>una collezione di prompt</strong>{" "}
                  <strong>testati</strong> e <strong>garantiti</strong> per
                  produrre risultati visivi strepitosi.
                </p>
              </div>
              <div className="flex items-center gap-[15px]">
                <img
                  className="h-full w-full object-cover rounded-full max-w-[55px]"
                  src="https://storage.googleapis.com/alsafi-files/asktoai.com/logo-round-web.png"
                  alt="Logo round web"
                  height={2304}
                  width={2305}
                  srcSet="https://storage.googleapis.com/alsafi-files/asktoai.com/googlecloud/15086/logo-round-web_5f28a37dfffeac17d8504dfc1bc3d34b.webp 200w, https://storage.googleapis.com/alsafi-files/asktoai.com/googlecloud/15086/logo-round-web_616b2c32fb7bb9679ad560fc61635847.webp 400w, https://storage.googleapis.com/alsafi-files/asktoai.com/googlecloud/15086/logo-round-web_5472332afa344033d2bf9e7b6b9d883e.webp 600w"
                  loading="eager"
                  decoding="async"
                />
                <div>
                  <p className="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6 capitalize">
                    ASKtoAI
                  </p>
                  <p className="text-sm font-bold">16/01/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]">
          <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-8 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
        </div>
      </div>
    </div>
  );
}
