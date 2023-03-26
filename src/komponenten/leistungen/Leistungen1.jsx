import { Check } from "@mui/icons-material";
import React from "react";
import behandlung from "../../assets/behandlung.jpg";


const Leistungen1 = () => {
  return (
    <section id="leistungen" className=" bg-gray-300 text-gray-800">
      <div className="p-6 pt-12">
        <div className="flex flex-col md:flex-row ">
          <div data-aos="zoom-in" className="md:w-1/2 px-6 hidden md:block">
            <img src={behandlung} alt="" className="" />
          </div>
          <div data-aos="zoom-in" className="md:w-1/2 px-4 sm:px-8 mb-4 md:mb-0">
            <h2 className="text-3xl sm:text-4xl uppercase">Leistungen</h2>
            <hr className="my-4 bg-gray-800 h-0.5 border-none" />
            <p>
              Als Haustierärzte behandeln wir nicht nur Hund, Katze, Maus,
              Kaninchen und viele andere Tierarten mehr – wir sind dabei auch
              noch ihr Kinder-, Zahn-, Augen-, Frauen- und Hautarzt zugleich,
              genauso wie Chirurg und Internist. Mit drei Tierärzten, viel
              Erfahrung und unterschiedlichen Spezialisierungen sind wir hier
              bestens aufgestellt.
            </p>
          </div>
          <div data-aos="zoom-in" className="md:w-1/2 px-4 sm:px-8  md:hidden">
            <img src={behandlung} alt="" className="" />
          </div>
        </div>
        <div className="md:p-6 mt-12 flex justify-between flex-wrap ">
          <div data-aos="zoom-in" className="flex sm:w-1/2 md:w-1/3 mb-8 ">
            <div>
              <div className="bg-white rounded-full p-2 mr-2 ">
                <Check />
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-2xl uppercase mb-2">
                Innere Medizin
              </h3>
              <p>
                Diagnostik von Erkrankungen sämtlicher Organsysteme,
                Stoffwechselerkrankungen, systemischen Erkrankungen,
                Infektionskrankheiten, Erkrankungen des Immunsystems und
                hämatologische Erkrankungen.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="flex sm:w-1/2 md:w-1/3 mb-8">
            <div>
              <div className="bg-white rounded-full p-2 mr-2 ">
                <Check />
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-2xl uppercase mb-2">Onkologie</h3>
              <p>
                Diagnostik von Tumorerkrankungen mithilfe von Röntgen,
                Ultraschall, ultraschallgestützte Biopsien, Zytologie und
                Histologie, Laboranalysen, Tumor-Staging und Verlaufskontrollen.
                Chemotherapien.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="flex sm:w-1/2 md:w-1/3 mb-8">
            <div className="">
              <div className="bg-white rounded-full p-2 mr-2 ">
                <Check />
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-2xl uppercase mb-2">
                Endokrinologie
              </h3>
              <p>
                Diagnostik von Hormonstörungen und Stoffwechselerkrankungen
                durch Labor- und Ultraschalluntersuchungen, sonographische
                Beurteilung von Nebennieren, Schilddrüse, Ovarien und
                Bauchspeicheldrüse. Viele Hormonwerte auch in unserem
                Inhouse-Labor in wenigen Minuten verfügbar.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="flex sm:w-1/2 md:w-1/3 mb-8">
            <div>
              <div className="bg-white rounded-full p-2 mr-2 ">
                <Check />
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-2xl uppercase mb-2">
                Kardiologie
              </h3>
              <p>
                Herzbeurteilung durch Auskultation, digitales Röntgen,
                computergesteuertes EKG, Blutdruckmessung, Laboranalysen
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="flex sm:w-1/2 md:w-1/3 mb-8">
            <div>
              <div className="bg-white rounded-full p-2 mr-2 ">
                <Check />
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-2xl uppercase mb-2">
                Labordiagnostik
              </h3>
              <p>
                Komplettes Inhouse-Labor, Harn- und Kotuntersuchungen im eigenen
                Labor, Zytologie, Histologie, parasitologische Untersuchungen,
                Schnelltests FIV/FeLV, Giardien, Parvovirose, NTproBNP, cPLI
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="flex sm:w-1/2 md:w-1/3">
            <div>
              <div className="bg-white rounded-full p-2 mr-2 ">
                <Check />
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-2xl uppercase mb-2">
                Labordiagnostik
              </h3>
              <p>
                Komplettes Inhouse-Labor, Harn- und Kotuntersuchungen im eigenen
                Labor, Zytologie, Histologie, parasitologische Untersuchungen,
                Schnelltests FIV/FeLV, Giardien, Parvovirose, NTproBNP, cPLI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leistungen1;
