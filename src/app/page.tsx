import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TextBoxesSection from "./components/TextBoxesSection";
import Checkup from "./components/checkup";
import Analisi from "./components/Analisi";
import Footer from "./components/Footer";
import { CheckUpForm } from "./components/CheckUpForm";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="page">
      <Navbar />

      <Header />
      <TextBoxesSection
        title={
          <>
            {" "}
            La Tua{" "}
            <span className="text-cyan-400 font-bold text-4xl">
              Digital Performance
            </span>{" "}
            Agency{" "}
          </>
        }
        subtitle="“Siamo quello che facciamo ripetutamente. L’eccellenza dunque non è un
          atto ma un’abitudine” (Aristotele)"
        textBoxes={[
          {
            title: "Cosa",
            description: (
              <>
                Troviamo la strategia online più efficace per ogni business e la
                rendiamo scalabile.
                <div className="mt-6">
                  Il tuo obiettivo è il nostro obiettivo.
                </div>
              </>
            ),
          },
          {
            title: "Come",
            description: (
              <>
                <b>
                  Formazione, aggiornamento ed esperienza sono nel nostro DNA.
                </b>

                <div className="mt-6">
                  Non sono i settori di mercato o le piattaforme pubblicitarie a
                  fare la differenza ma la nostra competenza.
                </div>
              </>
            ),
          },
          {
            title: "Perchè",
            description: (
              <>
                Crediamo nella trasparenza, in un rapporto di confronto e
                collaborazione continua con il cliente.
                <div className="mt-6">
                  Ad ogni progetto diamo presenza, attenzione e cura. Da noi
                  trovi sempre qualcuno che ti risponde quando chiami!
                </div>
              </>
            ),
          },
        ]}
      />
      <Checkup />
      <Analisi />
      <Carousel />
      <CheckUpForm />

      <Footer />
    </div>
  );
}
