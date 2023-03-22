import { CheckBoxOutlined } from "@mui/icons-material";
import React from "react";
import bild from "../../assets/react.svg"

const AboutUs4 = () => {
  return (
    <section id="überuns" className="bg-primary1 ">
      <div>
        <div className="flex flex-col sm:flex-row">
          <div className="sm:hidden">
            <img
              src={bild}
              alt="bild"
              className="max-h-[400px] sm:max-h-[500px] w-full"
            />
          </div>
          <div className="flex-col flex-1">
            <div className="text-3xl p-12 px-6 sm:px-12 pb-6">
              <h1
                className={`font-extrabold text-4xl`}
              >
                Über uns
              </h1>
              <div className="flex">
                <hr className="w-[100px] h-[2px] font-extrabold bg-black" />
                <hr className="w-[150px] h-[2px] font-extrabold bg-gray-300" />
              </div>
            </div>
            <div
              className={`p-12 pt-0 px-6 sm:px-12 pb-6 `}
            >
              <p>
                Als Fahrschule Aslan haben wir seit 2011 unzähligen jungen und
                auch älteren Menschen dabei geholfen, ihren Führerscheinwunsch
                zu erfüllen. Mit unserer langjährigen Erfahrung bereiten wir
                unsere Fahrschüler/innen optimal auf ihre Prüfungen vor.{" "}
                <br className="mb-4" /> Du hast deinen Führerscheinwunsch noch
                nicht erfüllt? Warte nicht länger und setze dich mit uns in
                Verbindung! <br className="mb-4" /> Wir freuen uns auf dich!
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row flex-wrap justify-center px-6 sm:px-12 pb-16`}
            >
              <div
                data-aos="fade-left"
                className={`sm:w-1/2 flex items-center `}
              >
                <CheckBoxOutlined className="" />
                <span className="ml-2 p-4">Langjährige Erfahrung</span>
              </div>
              <div data-aos="fade-left" className="sm:w-1/2 flex items-center ">
                <CheckBoxOutlined className="" />
                <span className="ml-2 p-4">Moderne Autos</span>
              </div>
              <div data-aos="fade-left" className="sm:w-1/2 flex items-center ">
                <CheckBoxOutlined className="" />
                <span className="ml-2 p-4">Zufriedene Kunden</span>
              </div>
              <div data-aos="fade-left" className="sm:w-1/2 flex items-center ">
                <CheckBoxOutlined className="" />
                <span className="ml-2 p-4">Flexible Zeiten</span>
              </div>
            </div>
          </div>
          <div
            className="flex-1 "
            style={{
              backgroundImage: `url(${bild})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
            }}
          ></div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div
            className="flex-1"
            style={{
              backgroundImage: `url(${bild})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
            }}
          >
            {/* <img src={laptop1} alt="laptop1" /> */}
          </div>
          <div className="sm:hidden ">
            <img
              src={bild}
              alt="team"
              className="max-h-[400px] sm:max-h-[500px] w-full"
            />
          </div>
          <div className="flex-col flex-1">
            <div className="text-3xl p-12 px-6 sm:px-12 pb-6">
              <h1 className="font-extrabold text-4xl">
                Warum uns auswählen?
              </h1>
              <div className="flex">
                <hr className="w-[100px] h-[2px] font-extrabold bg-black" />
                <hr className="w-[150px] h-[2px] font-extrabold bg-gray-300" />
              </div>
            </div>
            <div className="p-12 pt-0 px-6 sm:px-12 pb-6">
              <p>
                Bei unserer Fahrschule stehst du als Individuum im Vordergrund!
                Wir beschäftigen uns mit dir persönlich und stimmen das Tempo
                der Theorie und Praxis auf dich ab! <br className="mb-4" /> Dein
                Wohlbefinden hat dabei für uns eine große Priorität: Wir
                gestalten unsere Lehrpläne so, dass du bei deinen Terminen nicht
                nur Fortschritte erzielen wirst, sondern dabei auch Spaß haben
                wirst. Schließlich ist bewiesen, dass der Spaß beim Lernen ein
                wichtiger Faktor Richtung Erfolg ist! Wenn du dann beschließt,
                zur Prüfung anzutreten, wirst du hervorragend vorbereitet sein!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center px-6 sm:px-12 pb-16">
              <div className="sm:w-1/2 flex items-center  ">
                <CheckBoxOutlined className="" />
                <span className="ml-2 p-4">Langjährige Erfahrung</span>
              </div>
              <div className="sm:w-1/2 flex items-center ">
                <CheckBoxOutlined className="" />
                <span className="ml-2 p-4">Moderne Autos</span>
              </div>
              <div className="sm:w-1/2 flex items-center ">
                <CheckBoxOutlined className="" />
                <span className="ml-2 p-4">Zufriedene Kunden</span>
              </div>
              <div className="sm:w-1/2 flex items-center ">
                <CheckBoxOutlined className="" />
                <span className="ml-2 p-4">Flexible Zeiten</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;
