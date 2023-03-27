import React from "react";
import "./hero1.css";
import bild from "../../assets/cat.jpg";
import bild1 from "../../assets/hund.jpg";
import bild2 from "../../assets/behandlung.jpg";
import bild3 from "../../assets/farmhaus.jpg";

const Hero1 = () => {
  return (
    <div className="relative h-[92vh] overflow-hidden">
      <div className="text-container1 block max-w-[800px] text-center mx-auto p-4">
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
        <div className="flex justify-center">
          <button className="bg-white rounded-md p-2 px-6 mr-4 sm:mr-6">Klicke hier</button>
          <button className="bg-white rounded-md p-2 px-6 ml-4 sm:ml-6">Klicke hier</button>
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

export default Hero1;
