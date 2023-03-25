import { CalendarMonth, House, Money, CarRental } from "@mui/icons-material";
import React from "react";

const Besonderheiten2 = () => {
  return (
    <div className="p-6 py-12 bg-gray-200">
      <div className="grid sm:grid-cols-2 justify-items-center md:w-[60%] xl:w-[50%] mx-auto gap-y-20">
        <div className="flex flex-col items-center text-center">
          <CalendarMonth sx={{ fontSize: 70 }} className="" />
          <span className="text-2xl sm:text-3xl mb-2">Tägliche Kurse</span>
          <span className="sm:text-lg">
            Unsere Kurse werden von <br /> Montag bis Samstag angeboten.
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Money sx={{ fontSize: 70 }} className="" />
          <span className="text-2xl sm:text-3xl mb-2">Tägliche Kurse</span>
          <span className="sm:text-lg">
            Unsere Kurse werden von <br /> Montag bis Samstag angeboten.
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <House sx={{ fontSize: 70 }} className="" />
          <span className="text-2xl sm:text-3xl mb-2">Tägliche Kurse</span>
          <span className="sm:text-lg">
            Unsere Kurse werden von <br /> Montag bis Samstag angeboten.
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <CarRental sx={{ fontSize: 70 }} className="" />
          <span className="text-2xl sm:text-3xl mb-2">Tägliche Kurse</span>
          <span className="sm:text-lg">
            Unsere Kurse werden von <br /> Montag bis Samstag angeboten.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Besonderheiten2;
