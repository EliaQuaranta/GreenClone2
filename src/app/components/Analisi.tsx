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

          <button className="bg-cyan-400 p-6 mb-16 border-cyan-900 text-white font-bold  mt-7">
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

          <button className="bg-cyan-400 p-6 mb-16 border-cyan-900 text-white font-bold  mt-7">
            TUTTI I SERVIZI
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-center pt-3 font-bold text-md text-4xl pl-4 pr-4 bg-[#F5F1EE]">
          “Dicono di noi...
        </h3>
        <div className="bg-[#F5F1EE] flex justify-center">
          <div className="container-fluid flex md:flex-row flex-col gap-20 pt-20 pb-32 max-w-[1100px] ">
            <div className=" md:flex flex-wrap border-l-2  border-cyan-400 ml-6 pb-8">
              <div className="pl-7 fontHead font-bold text-xl">
                Sulla Crescita del Progetto Affidato
              </div>
              <div className="pl-7 pt-6">
                “Abbiamo iniziato la collaborazione con Green.Click con le
                campagne su Google. Visti gli ottimi risultati, ci siamo
                affidati a loro anche per l’attività SEO. Anche qui abbiamo
                avuto degli esiti più che positivi. Professionali, competenti e
                sempre disponibili, li consigliamo vivamente per far crescere
                un’attività. Direi indispensabili.
              </div>
              <div className="pl-7 pt-6">RCOPrinting</div>
            </div>
            <div className=" md:flex flex-wrap border-l-2 border-cyan-400  ml-6 pb-8">
              <div className="pl-7 fontHead font-bold text-xl ;">
                Sui Risultati
              </div>
              <div className="pl-7 pt-6 font-bold">
                “Ormai da 1 anno collaboriamo con GCM. Affidabili, veloci,
                versatili. Ottimo supporto per la gestione delle campagne
                Google. Risultati evidenti, molto soddisfatti.”. TheWladurner
              </div>
              <div className="pl-7 pt-6">
                “Affidabili, puntuali, preparati. In loro abbiamo trovato un
                ottimo supporto per il SEO e per la gestione delle campagne
                online. Risultati in crescita, siamo molto soddisfatti”. Zereau
                Acqua Impatto Zero
              </div>
            </div>
            <div className=" md:flex flex-wrap border-l-2 border-cyan-400 ml-6 pb-8">
              <div className="pl-7 fontHead font-bold text-xl">
                Sulla Cura del cliente
              </div>
              <div className="pl-7 pt-6">
                “Green Click? … una garanzia: le campagne vengono gestite con
                personale qualificato… molto cordiale e affabile, disponibile
                all’ascolto e che riesce a soddisfare completamente le richieste
                del cliente.Ci si sente seguiti e compresi nelle varie esigenze
                che subentrano nel tempo. Di conseguenza i risultati sono
                costantemente in crescita!Consiglio caldamente di affidarsi a
                questa azienda: io la sceglierei nuovamente!
              </div>
              <div className="pl-7 pt-6">Maria Cristina Bonamigo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analisi;
