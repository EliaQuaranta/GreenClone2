"use client";
import { useEffect, useState } from "react";

const CookieBar = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    // Check if localStorage is available
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("cookieConsent") === "true"
    ) {
      setCookieConsent(true);
    }
  }, []);

  const acceptCockies = () => {
    // Imposta il consenso e salva nel localStorage
    setCookieConsent(true);
    localStorage.setItem("cookieConsent", "true");
  };

  if (cookieConsent) {
    return null; // Non mostrare più niente se il consenso stato dato
  }

  return (
    <div className="z-[100] fixed bottom-0 left-0 w-screen p-4 lg:p-8 lg:pr-10 bg-white border-t shadow-xl flex lg:flex-nowrap flex-wrap text-sm lg:text-sm items-center gap-4 lg:gap-10 ">
      <div>
        <div className="">
          Questo sito web utilizza i cookie Utilizziamo i cookie per
          personalizzare contenuti ed annunci, per fornire funzionalità dei
          social media e per analizzare il nostro traffico. Condividiamo inoltre
          informazioni sul modo in cui utilizza il nostro sito con i nostri
          partner che si occupano di analisi dei dati web, pubblicità e social
          media, i quali potrebbero combinarle con altre informazioni che ha
          fornito loro o che hanno raccolto dal suo utilizzo dei loro
          servizi.Leggi la policy{" "}
          <button
            onClick={acceptCockies}
            className=" mt-3 flex items-center z-40 relative transition-all duration-200 group px-[15px] py-[10px] lg:px-[28px] lg:py-[20px] rounded-[50px] hover:bg-gray-900 bg-primary  text-white w-fit hover:translate-y-[-3px]  whitespace-nowrap shrink-0 "
          >
            Accetto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBar;
