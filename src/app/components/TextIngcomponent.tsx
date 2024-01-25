function TextIngcomponent({
  title,
  subtitle,
  mage,
}: {
  title: any;
  subtitle: string;
  Image: any;
}) {
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center max-w-5xl p-10 xl:p-0 mx-auto gap-10">
        <div className="lg:w-1/2">
          <h1 className="  font-bold text-5xl pt-10 leading-snug">{title}</h1>

          <h4 className="  fontHead text-lg text-clip pt-5">{subtitle}</h4>
          {Image && Image > 1 && (
            <div className="grid lg:grid-cols-2 max-w-5xl px-7 lg:px-0 gap-20">
              <div>
                <h2 className="font-bold text-4xl pt-48">
                  Casi di <span className="text-cyan-400">successo</span>
                </h2>
                <h2 className=" pt-7 fontHead">
                  Ti raccontiamo come è andata con la gestione Green.Click
                </h2>
                <h2 className=" pt-7">
                  Giornalmente veniamo a contatto e ascoltiamo tante storie,
                  progetti, idee. Ci occupiamo dello sviluppo di strategie con
                  tante caratteristiche diverse. Siamo convinti che per ogni
                  business online si possa trovare la strada giusta per
                  crescere. In questo spazio ti proponiamo alcuni casi studio
                  per mostrarti come lavoriamo.
                  <button className="mt-7  p-4 bg-cyan-400 flex">
                    scopri di più!
                  </button>
                </h2>
              </div>

              <div>
                <div className="carousel  lg:max-w-[500px] max-h-[500px]  pt-32 gap-">
                  <div id="item1" className="carousel-item ">
                    <img
                      src="/ecommerce-costumi-da-bagno-greenclick-1-800x600.jpg"
                      className=""
                    />
                  </div>
                  <div id="item2" className="carousel-item ">
                    <img
                      src="/green-click-case-history-brand-lusso-2-800x600.jpg"
                      className=""
                    />
                  </div>
                  <div id="item3" className="carousel-item ">
                    <img
                      src="/greenclick-ecommerce-sneakers2-800x600.jpg"
                      className=""
                    />
                  </div>
                </div>
                <div className="flex justify-start pl-5 w-full py-2 gap-2">
                  <a
                    href="#item1"
                    className="h-8 w-8 hover:border transition-all border-transparent hover:border-black duration-300 flex items-center justify-center rounded-full"
                  >
                    <div className="h-2 w-2 bg-black rounded-full"></div>
                  </a>
                  <a
                    href="#item2"
                    className="h-8 w-8 hover:border transition-all border-transparent hover:border-black duration-300 flex items-center justify-center rounded-full"
                  >
                    <div className="h-2 w-2 bg-black rounded-full"></div>
                  </a>
                  <a
                    href="#item3"
                    className="h-8 w-8 hover:border transition-all border-transparent hover:border-black duration-300 flex items-center justify-center rounded-full"
                  >
                    <div className="h-2 w-2 bg-black rounded-full"></div>
                  </a>
                </div>
              </div>
            </div>
          )}

          <button className="bg-cyan-400 p-6 mb-16 border-cyan-900 text-white font-bold  mt-7">
            TUTTI I SERVIZI
          </button>
        </div>

        <div className="lg:w-1/2 flex items-center">{Image}</div>
      </div>

      {textBoxes && textBoxes.length > 0 && (
        <div className="bg-[#F5F1EE] flex justify-center">
          <div className="grid md:grid-cols-3 gap-20 pt-20 pb-32 max-w-5xl px-7 lg:px-0 ">
            {textBoxes.map((textBox: any, index: number) => (
              <div
                key={index}
                className=" md:flex flex-col border-l-2  border-cyan-400 pb-8"
              >
                <div className="pl-7 fontHead font-bold text-xl">
                  {textBox.title}
                </div>
                <div className="pl-7 pt-6">{textBox.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <h3 className=' text-center font-bold'>Crediamo nella trasparenza,
          in un rapporto di confronto
          e collaborazione continua con il cliente.</h3> */}

      {/* <h3>Ad ogni progetto diamo presenza, attenzione e cura.</h3>
      <h3>Da noi trovi sempre qualcuno che ti risponde quando chiami!</h3> */}
    </div>
  );
}

export default TextIngcomponent;
