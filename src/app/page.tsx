import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Checkup from "./components/checkup";
import Analisi from "./components/Analisi";
import Carousel from "./components/carousel";
import Footer from "./components/Footer";
import { CheckUpForm } from "./components/CheckUpForm";

export default function Home() {
  return (
    <div className="page">
      <Navbar />

      <Header />
      <Main />
      <Checkup />
      <Analisi />
      <Carousel />
      <CheckUpForm />

      <Footer />
    </div>
  );
}
