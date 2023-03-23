import { Call, Email, House, Room } from "@mui/icons-material";
import React from "react";

const Kontakt1 = () => {
  return (
    <section className="bg-gray-200 p-6 md:px-20 py-12 w-full">
      <div className="flex flex-col sm:flex-row  w-full">
        <div className="sm:w-1/2 w-full mb-6 sm:mb-0">
          <div>
            <h2 className="text-2xl sm:text-3xl uppercase ">Kontakt</h2>
            <p className="mb-4">Ruf an oder schreib uns</p>
          </div>
          <div>
            <div className="mb-1">
              <House />
              <span className="ml-2">Autokaufhaus Ernst</span>
            </div>
            <div className="mb-1">
              <Room />
              <span className="ml-2">Lehmannstr. 23, 34213 Hamburg</span>
            </div>
            <div className="mb-1">
              <Call />
              <span className="ml-2">+49 212 340 989 43</span>
            </div>
            <div className="mb-1">
              <Email />
              <span className="ml-2">ernst@outlook.de</span>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <form className=" w-[100%] ">
            <div className="flex flex-wrap sm:flex-nowrap mb-2">
              <div className="w-full md:w-1/2 sm:mr-1 mb-2 md:mb-0">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  required
                  className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-textwhite"
                />
              </div>
              <div className="w-full md:w-1/2 sm:ml-1">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Nachname"
                  required
                  className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-textwhite"
                />
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap mb-2">
              <div className="w-full md:w-1/2 sm:mr-1 mb-2 md:mb-0">
                <input
                  type="text"
                  id="name"
                  placeholder="Telefon"
                  required
                  className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-textwhite"
                />
              </div>
              <div className="w-full md:w-1/2 sm:ml-1">
                <input
                  type="tel"
                  id="phone"
                  placeholder="E-Mail"
                  required
                  className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-textwhite"
                />
              </div>
            </div>
            <div className="mb-3">
              <textarea
                id="message"
                placeholder="Nachricht"
                required
                className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-textwhite"
                rows="6"
              />
            </div>

            <div className="flex justify-start">
              <button className="h-[42px] w-[100%] px-6 uppercase bg-secondary flex items-center">
                <span className=" text-textwhite mx-auto ">Abschicken</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Kontakt1;
