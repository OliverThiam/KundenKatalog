import React from "react";
import {Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import bild from "../../assets/cat.jpg";
import bild1 from "../../assets/hund.jpg";
import bild2 from "../../assets/behandlung.jpg";
import bild3 from "../../assets/farmhaus.jpg";

const Hero2 = () => {
  

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
        <div className="">
          <button className="bg-white rounded-md p-2 px-20 mr-4 sm:mr-6">Klicke hier</button>
        </div>
      </div>
        <div className="absolute inset-0 h-[100vh]">

         <Splide
        options={{
          speed: 1500,
            arrows: false,
            autoplay: true,
          perMove: 1,
          pagination: false,
          type: "loop",
      perPage:1,
      
      
        }}
      >

          <SplideSlide
          >
           <img src={bild} alt="" className="h-[100vh] w-[100vw]"/>
          </SplideSlide>
          <SplideSlide
          >
           <img src={bild2} alt="" className="h-[100vh] w-[100vw]"/>
          </SplideSlide>
      </Splide>
            </div>
      <div className="inset-0 bg-black absolute h-full bg-opacity-60"></div>
    </div>
  );
};

export default Hero2;
