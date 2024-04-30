import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Homepage/Benefits";
import Collaboration from "./components/Homepage/Collaboration";
import Footer from "./components/Homepage/Footer";
import Header from "./components/Homepage/Header";
import Hero from "./components/Homepage/Hero";
import Pricing from "./components/Homepage/Pricing";
import Services from "./components/Homepage/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
