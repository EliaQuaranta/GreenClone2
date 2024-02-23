"use client";

import { CheckUpForm } from "../components/CheckUpForm";
import Checkup from "../components/Checkup";
import TextImgcomponent from "../components/TextImgcomponent";
import CheckUpServizi from "./ComponentsServizi/CheckUpServizi";
import TextBoxesService from "./ComponentsServizi/TextBoxesService";

export default function Servizi() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-5xl w-full ">
          <TextBoxesService
            title={
              <>
                {" "}
                I nostri{" "}
                <span className="text-primary font-bold text-4xl">
                  servizi
                </span>{" "}
                Agency{" "}
              </>
            }
            subtitle="“Alsafi is the way“"
            textBoxes={[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                ),
                title: "Google Ads",
                description: (
                  <>
                    Green.Click è Google Premier Partner. Abbiamo un team Google
                    Ads specializzato in tutti i tipi di pubblicità: ricerca,
                    display, shopping, video.
                    <div className="mt-6">
                      Lavoriamo con ogni tipo di budget, con aziende di ogni
                      dimensione, con campagne nazionali e internazionali. Con
                      noi la tua “vetrina” su Google è in mani sicure!
                    </div>
                  </>
                ),
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                ),
                title: "SEO",
                description: (
                  <>
                    <div className="mt-6">
                      Che tu abbia necessità di ampio raggio o esigenze
                      geolocalizzate, un buon lavoro SEO deve essere la base.
                      Partiamo da un’analisi approfondita della situazione per
                      poi sviluppare un progetto volto ad ottimizzare il sito in
                      modo che soddisfi i requisiti di Google (e di altri motori
                      di ricerca come Bing) e le esigenze dei clienti.
                    </div>
                  </>
                ),
              },
              {
                title: "Facebook",
                description: (
                  <>
                    Green.Click è Meta Business Partner. Affidandoti a noi hai
                    la certezza di lavorare con specialisti delle piattaforme
                    social più conosciute. Sei un’azienda e vuoi migliorare la
                    tua visibilità online?
                    <div className="mt-6">
                      Un Ecommerce e vuoi vendere? Vuoi promuovere dei corsi?
                      Qualunque sia il tuo obiettivo svilupperemo insieme la
                      miglior strategia pubblicitaria.
                    </div>
                  </>
                ),
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                ),
                title: "Instagram",
                description: (
                  <>
                    Con Instagram devi attirare l’attenzione, farti notare tra
                    tante pubblicità che l’utente visualizza. Hai mai provato a
                    sponsorizzare le stories? Sai quali funzionano meglio?
                    <div className="mt-6">
                      Sai cosa piace ai tuoi utenti? In quale fascia di età
                      funziona il tuo brand? Instagram è uno dei social con il
                      potenziale di crescita maggiore ma va saputo usare bene
                      per essere inserito in una strategia pubblicitaria!
                    </div>
                  </>
                ),
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                ),
                title: "LinkedIn",
                description: (
                  <>
                    Vuoi raggiungere utenti business e grandi aziende? Con
                    un’audience potenziale di quasi 660 milioni di utenti in
                    oltre 200 Paesi, LinkedIn rappresenta un’ottima opportunità.
                    <div className="mt-6">
                      Molto però dipende dall’obiettivo che hai e da come la
                      strategia viene sviluppata: si va dalla scelta del target,
                      al budget disponibile fino alla gestione della parte
                      organica e del direct marketing.
                    </div>
                  </>
                ),
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                ),
                title: "Email Marketing",
                description: (
                  <>
                    E’ considerato uno dei canali promozionali in crescita
                    costante. Tramite l’email è più facile infatti convincere
                    gli utenti ad interagire, cliccare su pagine specifiche,
                    visitare il sito o le pagine social.
                    <div className="mt-6">
                      Se i contenuti sono di qualità il tasso di engagement
                      cresce e questo contribuisce al posizionamento e alle
                      vendite. Tu hai già inserito l’email marketing nel tuo
                      piano promozionale online?
                    </div>
                  </>
                ),
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                ),
                title: "Monitoraggi",
                description: (
                  <>
                    Sai come monitorare l’enorme quantità di dati che una
                    campagna online ti riporta? Se hai uno store online devi
                    avere l’Ecommerce avanzato installato. E il Pixel? Hai
                    controllato che stia tracciando adeguatamente tutto sulle
                    tue campagne social?
                    <div className="mt-6">
                      Non perderti tra mille codici e tag. Green.Click ti aiuta
                      ad installare, controllare il funzionamento e interpretare
                      i dati!
                    </div>
                  </>
                ),
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                ),
                title: "Strategia per Ecommerce",
                description: (
                  <>
                    <b>
                      Qual’è il punteggio di ottimizzazione del tuo ecommerce?
                      Come è il rapporto tra spesa e ricavi? Sai cosa
                      ottimizzare?
                    </b>

                    <div className="mt-6">
                      Chiamaci per una consulenza completa: tracciamenti,
                      struttura delle campagne, analisi di costi e ricavi,
                      azioni pubblicitarie da ottimizzare e implementare, altri
                      canali da valutare.
                    </div>
                  </>
                ),
              },
              {
                title: "Piani Editoriali",
                description: (
                  <>
                    Sai come costruire un piano editoriale per le tue pagine
                    social e per il blog del sito? Quale tipo di contenuti
                    apprezza il tuo target? Quali sono le immagini e i video che
                    riportano risultati migliori?
                    <div className="mt-6">
                      Inoltre ogni social va trattato in maniera diversa per non
                      annoiare l’utente. Sui contenuti vince chi ci mette la
                      qualità!
                    </div>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className="flex justify-center">
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
      <div className="flex justify-center">
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
          imagePosition=""
          images={[
            "/green-click-case-history-brand-lusso-2-800x600.jpg",
            "/ecommerce-costumi-da-bagno-greenclick-1-800x600.jpg",
            "/ecommerce-costumi-da-bagno-greenclick-1-800x600.jpg",
            "/ecommerce-costumi-da-bagno-greenclick-1-800x600.jpg",
          ]}
        />
      </div>
    </div>
  );
}
