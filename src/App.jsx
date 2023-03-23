import AboutUs1 from "./komponenten/aboutUs/AboutUs1";
import AboutUs2 from "./komponenten/aboutUs/AboutUs2";
import AboutUs3 from "./komponenten/aboutUs/AboutUs3";
import AboutUs4 from "./komponenten/aboutUs/AboutUs4";
import Hero1 from "./komponenten/hero/Hero1";
import Kontakt1 from "./komponenten/kontakt/Kontakt1";
import Navbar1 from "./komponenten/navbars/Navbar1";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      {/* <Hero1 />
      <AboutUs1 />
      <AboutUs2 />
      <AboutUs3 />
      <AboutUs4 /> */}
      <Kontakt1/>
    </div>
  );
}

export default App;
