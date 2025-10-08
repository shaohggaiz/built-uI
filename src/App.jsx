import "./App.css";
import Billing from "./Components/Billing";
import Business from "./Components/Business";
import CardDeal from "./Components/CardDeal";
import Clients from "./Components/Clients";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Stats from "./Components/Stats";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="overflow-hidden w-full">
      <div className="bg-[#00040f]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-16">
          <Navbar />
        </div>
      </div>

      <div className="bg-[#00040f]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-16">
          <Hero />
        </div>
      </div>
      <div className="bg-[#00040f]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-16">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
