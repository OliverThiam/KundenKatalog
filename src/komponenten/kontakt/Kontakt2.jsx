import React from "react";

const Kontakt2 = () => {
  return (
    <section id="kontakt" className="2 font-poppins bg-gray-300">
      <div className="sm:p-12 p-6 pt-12 flex flex-col sm:justify-between xl:justify-center sm:flex-row gap-x-16">
        <div className="sm:w-[800px] py-6">
          <div>
            <h1 className="text-4xl  ">
              Kontakt aufnehmen
            </h1>
            <div className="flex mb-3">
              <hr className="w-[100px] h-[2px] font-extrabold " />
              <hr className="w-[180px] h-[2px] font-extrabold bg-gray-300" />
            </div>
            <div className="pb-3">
              <p className="font-light">
                Sie können mit uns in Kontakt geraten, indem Sie das Formular
                ausfüllen.
              </p>
            </div>
          </div>
          <form  className=" w-[100%] ">
            <div className="flex flex-wrap sm:flex-nowrap mb-2">
              <div className="w-full md:w-1/2 sm:pr-2 mb-2 md:mb-0">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  required
                  className="border border-black appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full md:w-1/2 sm:pl-2">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Telefon"
                  required
                  className="border border-black appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="mb-2">
              <input
                type="email"
                id="email"
                placeholder="E-Mail"
                required
                className=" border border-black appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-3">
              <textarea
                id="message"
                placeholder="Nachricht"
                required
                className="border border-black appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="6"
              />
            </div>

            <div className="flex justify-start">
              <button className="h-[42px] w-[100%] bg-black sm:w-[400px]  px-6 uppercase  flex items-center">
                <span className=" text-textwhite mx-auto ">
                  Abschicken
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className=" flex flex-col justify-around">
          <div>
            <div className="pb-5">
              <h2 className="text-2xl  ">
                Unser Standort
              </h2>
              <div className="flex flex-row">
                <hr className="w-[75px] h-[2px] font-extrabold " />
                <hr className="w-[50px] h-[2px] font-extrabold bg-gray-300" />
              </div>
            </div>
            <div className="font-light pb-4">
              <p>Luxemburgerweg 43</p>
              <p>Eschweiler 52903</p>
            </div>
          </div>
          <div>
            <div className="pb-5">
              <h2 className="text-2xl  ">Ruf uns an</h2>
              <div className="flex flex-row">
                <hr className="w-[75px] h-[2px] font-extrabold " />
                <hr className="w-[50px] h-[2px] font-extrabold bg-gray-300" />
              </div>
            </div>
            <div className="font-light pb-4">
              <p>0241 956832</p>
              <p>Rufen Sie uns an!</p>
            </div>
          </div>
          <div>
            <div className="pb-5">
              <h2 className="text-2xl  ">Kontakt</h2>
              <div className="flex flex-row">
                <hr className="w-[75px] h-[2px] font-extrabold " />
                <hr className="w-[50px] h-[2px] font-extrabold bg-gray-300" />
              </div>
            </div>
            <div className="font-light pb-4">
              <p>info@fahrschuleyildiz.de</p>
              <p>Impressum | Datenschutz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt2;
