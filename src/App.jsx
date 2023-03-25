import AboutUs1 from "./komponenten/aboutUs/AboutUs1";
import AboutUs2 from "./komponenten/aboutUs/AboutUs2";
import AboutUs3 from "./komponenten/aboutUs/AboutUs3";
import AboutUs4 from "./komponenten/aboutUs/AboutUs4";
import Besonderheiten from "./komponenten/besonderheiten/Besonderheiten";
import Besonderheiten2 from "./komponenten/besonderheiten/Besonderheiten2";
import Besonderheiten3 from "./komponenten/besonderheiten/Besonderheiten3";
import BilderGallery1 from "./komponenten/bilderGallery/BilderGallery1";
import Footer1 from "./komponenten/footer/Footer1";
import Footer2 from "./komponenten/footer/Footer2";
import Hero1 from "./komponenten/hero/Hero1";
import Hero2 from "./komponenten/hero/Hero2";
import Kontakt1 from "./komponenten/kontakt/Kontakt1";
import Kontakt2 from "./komponenten/kontakt/Kontakt2";
import Kontakt3 from "./komponenten/kontakt/Kontakt3";
import Navbar1 from "./komponenten/navbars/Navbar1";
import Probieren from "./komponenten/Probieren";
import Team1 from "./komponenten/team/Team1";
import TeamCard1 from "./komponenten/team/TeamCard1";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Hero1 />
      {/* <Hero2/> */}
      {/* <AboutUs1 /> */}
      {/* <AboutUs2 /> */}
      {/* <AboutUs3 /> */}
      {/* <AboutUs4 /> */}
      {/* <Team1/> */}
      {/* <BilderGallery1/> */}
      <Besonderheiten/>
      <Besonderheiten2/>
      <Besonderheiten3/>
      {/* <Kontakt1/> */}
      {/* <Kontakt2/> */}
      {/* <Kontakt3/> */}
      {/* <Probieren/> */}
      {/* <Footer1/> */}
      <Footer2/>
    </div>
  );
}

export default App;
