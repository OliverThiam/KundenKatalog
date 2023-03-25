import React from "react";
import "./hero3.css";
import bild from "../../assets/cat.jpg";
import bild1 from "../../assets/hund.jpg";
import bild2 from "../../assets/behandlung.jpg";
import bild3 from "../../assets/farmhaus.jpg";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

const Hero3 = () => {
  return (
    <div className="relative h-[92vh] overflow-hidden">
      <div className="text-container block max-w-[800px] text-center mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-5xl text-white font-bold">
            Deine perfekte Webseite
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            amet ad? Officiis animi placeat libero, magnam molestiae veniam
            dignissimos
          </p>
        </div>
        <div className="flex flex-row justify-center mb-4 sm:mb-4">
            <div className="px-4 shadow-lg">
              <div className="bg-white text-gray-900 p-1.5 rounded-full ">
                <Facebook sx={{ height: "26px", width: "26px" }} />
              </div>
            </div>
            <div className="px-4 shadow-lg">
              <div className="bg-white text-gray-900 p-1.5 rounded-full ">
                <WhatsApp sx={{ height: "26px", width: "26px" }} />
              </div>
            </div>
            <div className="px-4 shadow-lg">
              <div className="bg-white text-gray-900 p-1.5 rounded-full ">
                <Instagram sx={{ height: "26px", width: "26px" }} />
              </div>
            </div>
          </div>
          <div className="mt-10 text-center ">
        <a href="#" className="bg-white shadow-lg text-gray-800 p-4 px-10 rounded-md">Klicken</a>
      </div>
      </div>
      <div className="h-[full] w-full ">
        {/* <div className='bg-fade' style={{backgroundImage: `url(${bild})`}}></div> */}
        <div
          className="bg-fade"
          style={{ backgroundImage: `url(${bild1})`, }}
        ></div>
        <div
          className="bg-fade"
          style={{ backgroundImage: `url(${bild2})` }}
        ></div>
        <div
          className="bg-fade"
          style={{ backgroundImage: `url(${bild3})` }}
        ></div>
        <div className="inset-0 h-full absolute bg-black opacity-60"></div>
      </div>
    </div>
  );
};

export default Hero3;
