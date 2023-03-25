import { QuestionAnswer } from "@mui/icons-material";
import React from "react";

const Besonderheiten3 = () => {
  return (
    <div className="bg-gray-300 p-6 py-12">
        <h2 className="text-3xl sm:text-4xl text-center mb-10">Was wir Ihnen als Unternehmen bieten</h2>
      <div className="flex flex-col items-center justify-center sm:flex-row ">
        <div className="sm:mx-4 mb-4 sm:mb-0 flex flex-col text-center bg-white shadow-lg p-6 py-12 max-w-[450px] ">
          <QuestionAnswer sx={{fontSize: 55}} className="mx-auto mb-6"/>
          <span className="mb-4 text-2xl">Wertermittlung</span>
          Unsere Immobilienmakler ermitteln mit Ihnen den wahren Wert Ihrer
          Immobilie
        </div>
        <div className="sm:mx-4 mb-4 sm:mb-0 flex flex-col text-center bg-white shadow-lg p-6 py-12 max-w-[450px]">
          <QuestionAnswer sx={{fontSize: 55}} className="mx-auto mb-6"/>
          <span className="mb-4 text-2xl">Wertermittlung</span>
          Unsere Immobilienmakler ermitteln mit Ihnen den wahren Wert Ihrer
          Immobilie
        </div>
        <div className="sm:mx-4 sm:mb-0 flex flex-col text-center bg-white shadow-lg p-6 py-12 max-w-[450px]">
          <QuestionAnswer sx={{fontSize: 55}} className="mx-auto mb-6"/>
          <span className="mb-4 text-2xl">Wertermittlung</span>
          Unsere Immobilienmakler ermitteln mit Ihnen den wahren Wert Ihrer
          Immobilie
        </div>
      </div>
      <div className="mt-12 text-center ">
        <a href="#" className="bg-black shadow-lg text-white p-4 px-10 ">Klicken</a>
      </div>
    </div>
  );
};

export default Besonderheiten3;
