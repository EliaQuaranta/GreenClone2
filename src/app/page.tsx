import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TextBoxesSection from "./components/TextBoxesSection";
import Checkup from "./components/Checkup";
import Footer from "./components/Footer";
import { CheckUpForm } from "./components/CheckUpForm";

import TextImgcomponent from "./components/TextImgcomponent";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <TextBoxesSection
        title={
          <>
            {" "}
            La Tua{" "}
            <span className="text-primary font-bold text-4xl">
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
      <div className="py-10">
        <TextImgcomponent
          title="titolo1"
          subtitle="“Siamo quello che facciamo ripetutamente. L’eccellenza dunque non è un
          atto ma un’abitudine” (Aristotele)"
          imagePosition=""
          images={["hand-made-green-click.jpg"]}
        />
        <TextImgcomponent
          title="titolo2 left"
          subtitle="“Siamo quello che facciamo ripetutamente. L’eccellenza dunque non è un
          atto ma un’abitudine” (Aristotele)"
          imagePosition="left"
          images={["hand-made-green-click.jpg"]}
        />
      </div>

      <div className="py-10">
        <TextImgcomponent
          title="titolo3 carosello"
          subtitle="“Siamo quello che facciamo ripetutamente. L’eccellenza dunque non è un
          atto ma un’abitudine” (Aristotele)"
          imagePosition=""
          images={[
            "/green-click-case-history-brand-lusso-2-800x600.jpg",
            "/ecommerce-costumi-da-bagno-greenclick-1-800x600.jpg",
            "/ecommerce-costumi-da-bagno-greenclick-1-800x600.jpg",
            "/ecommerce-costumi-da-bagno-greenclick-1-800x600.jpg",
          ]}
        />
      </div>

      <CheckUpForm />
    </div>
  );
}
