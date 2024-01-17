import React, { Component } from "react";

function Analisi() {
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center max-w-5xl p-10 xl:p-0 mx-auto gap-10">
        <div className="lg:w-1/2">
          <h1 className="  font-bold text-5xl pt-10 leading-snug">
            Di cosa hai bisogno per il tuo{" "}
            <span className=" text-cyan-400">Business</span> ?
          </h1>

          <h4 className="  fontHead text-lg text-clip pt-5">
            La strategia pubblicitaria giusta per dare valore al budget
            investito{" "}
          </h4>

          <h4 className="  text-lg pt-10">
            Hai scelto i canali giusti per la tua pubblicità? Sei consapevole di
            come viene speso il tuo budget pubblicitario? Stai ottenendo i
            risultati attesi?
          </h4>

          <h4 className="   text-lg pt-2">
            Green.Click costruisce la strategia più adeguata per la tua azienda.
            Seguiamo il tuo business lungo tutto il percorso di crescita online!
          </h4>

          <button className="bg-cyan-400 p-6 mb-16 border-cyan-900 text-white font-bold rounded-md  mt-7">
            TUTTI I SERVIZI
          </button>
        </div>

        <div className="lg:w-1/2 flex items-center">
          <img
            src="\hand-made-green-click.jpg"
            className="pt-8 min-h-2 w-full"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-wrap-reverse lg:flex-nowrap justify-center max-w-5xl p-10 xl:p-0 mx-auto gap-10">
        <div className="lg:w-1/2 flex items-center">
          <img
            src="https://www.greenclickmedia.it/wp-content/uploads/2023/09/rosa-green-click.jpg"
            className="pt-8 min-h-2 w-full"
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="  font-bold text-5xl pt-20 leading-snug">
            Di cosa hai bisogno per il tuo{" "}
            <span className=" text-cyan-400">Business</span> ?
          </h1>

          <h4 className="  fontHead text-lg text-clip pt-5">
            La strategia pubblicitaria giusta per dare valore al budget
            investito{" "}
          </h4>

          <h4 className="  text-lg pt-10">
            Hai scelto i canali giusti per la tua pubblicità? Sei consapevole di
            come viene speso il tuo budget pubblicitario? Stai ottenendo i
            risultati attesi?
          </h4>

          <h4 className="   text-lg pt-2">
            Green.Click costruisce la strategia più adeguata per la tua azienda.
            Seguiamo il tuo business lungo tutto il percorso di crescita online!
          </h4>

          <button className="bg-cyan-400 p-6 mb-16 border-cyan-900 text-white font-bold rounded-md  mt-7">
            TUTTI I SERVIZI
          </button>
        </div>
      </div>

      <div className="main">
        <div className=" bg-[#F5F1EE] ">
          <h1 className="text-center pt-10 font-extrabold text-3xl ">
            Dicono di noi...{" "}
          </h1>
        </div>
        <div className="flex w-full h-64 bg-[#F5F1EE] pt-10">
          <div className="grid w-1/3 h-20 flex-grow card rounded-box place-items-center">
            <h1 className="text-2xl font-bold fontHead">
              Sulla Crescita del Progetto Affidato
            </h1>
            {/* <h3 className=' text-center font-bold'>Troviamo la strategia online più efficace per ogni business e la rendiamo scalabile.</h3>
    <h3 className=' text-center'>Il tuo obiettivo è il nostro obiettivo.</h3> */}
          </div>

          <div className="divider divider-horizontal colorDiveder"></div>

          <div className="grid w-1/3 h-20 flex-grow card  rounded-box place-items-center">
            <h1 className="text-2xl font-bold fontHead">Sui Risultati</h1>
            {/* <h3 className=' text-center font-bold'>Formazione, aggiornamento ed esperienza sono nel nostro DNA.</h3>
    <h3 className=' text-center'>Non sono i settori di mercato o le piattaforme pubblicitarie a fare la differenza ma la nostra competenza.</h3> */}
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid w-1/3 h-20 flex-grow card  rounded-box place-items-center">
            <h1 className="text-2xl font-bold fontHead">
              Sulla Cura del cliente
            </h1>

            {/* <h3 className=' text-center font-bold'>Crediamo nella trasparenza,
        in un rapporto di confronto
        e collaborazione continua con il cliente.</h3> */}

            {/* <h3>Ad ogni progetto diamo presenza, attenzione e cura.</h3>
    <h3>Da noi trovi sempre qualcuno che ti risponde quando chiami!</h3> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analisi;
