import React, { Component } from "react";

function Main() {
  return (
    <div className="main">
      <div className=" bg-[#F5F1EE]  ">
        <h1 className="text-center pt-40 font-extrabold text-4xl ">
          La Tua{" "}
          <span className="text-cyan-400 font-bold text-4xl">
            Digital Performance
          </span>{" "}
          Agency{" "}
        </h1>
        <h3 className="text-center pt-3 text-md fontHead pl-4 pr-4">
          “Siamo quello che facciamo ripetutamente. L’eccellenza dunque non è un
          atto ma un’abitudine” (Aristotele)
        </h3>
      </div>
      <div className="bg-[#F5F1EE] flex justify-center">
        <div className="container-fluid flex md:flex-row flex-col gap-20 pt-20 pb-32 max-w-[1100px] ">
          <div className=" md:flex flex-col border-l-2  border-cyan-400 ml-6 pb-8">
            <div className="pl-7 fontHead font-bold text-xl">Cosa</div>
            <div className="pl-7 pt-6">
              Troviamo la strategia online più efficace per ogni business e la
              rendiamo scalabile.
            </div>
            <div className="pl-7 pt-6">
              ll tuo obiettivo è il nostro obiettivo.
            </div>
          </div>
          <div className=" md:flex flex-col border-l-2 border-cyan-400  ml-6 pb-8">
            <div className="pl-7 fontHead font-bold text-xl ;">Come</div>
            <div className="pl-7 pt-6 font-bold">
              Formazione, aggiornamento ed esperienza sono nel nostro DNA.
            </div>
            <div className="pl-7 pt-6">
              Non sono i settori di mercato o le piattaforme pubblicitarie a
              fare la differenza ma la nostra competenza.
            </div>
          </div>
          <div className=" md:flex flex-col border-l-2 border-cyan-400 ml-6 pb-8">
            <div className="pl-7 fontHead font-bold text-xl">Perchè</div>
            <div className="pl-7 pt-6">
              Crediamo nella trasparenza, in un rapporto di confronto e
              collaborazione continua con il cliente.
            </div>
            <div className="pl-7 pt-6">
              Ad ogni progetto diamo presenza, attenzione e cura. Da noi trovi
              sempre qualcuno che ti risponde quando chiami!
            </div>
          </div>
        </div>
      </div>

      {/* <h3 className=' text-center font-bold'>Crediamo nella trasparenza,
        in un rapporto di confronto
        e collaborazione continua con il cliente.</h3> */}

      {/* <h3>Ad ogni progetto diamo presenza, attenzione e cura.</h3>
    <h3>Da noi trovi sempre qualcuno che ti risponde quando chiami!</h3> */}
    </div>
  );
}

export default Main;
