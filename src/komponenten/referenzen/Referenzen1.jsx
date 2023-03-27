import React, { useEffect } from "react";
import "./referenzen1.css";
import bild from "../../assets/cat.jpg";
import bild1 from "../../assets/hund.jpg";
import bild2 from "../../assets/behandlung.jpg";
import bild3 from "../../assets/farmhaus.jpg";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import arrow from "../../assets/arrow.svg";
const Referenzen1 = () => {
  const bilder = [bild1, bild1, bild2, bild3];

  useEffect(() => {
    document
      .querySelectorAll(".referenzen1-image-container img")
      .forEach((image) => {
        image.onclick = () => {
          document.querySelector(".referenzen1-popup-image").style.display =
            "block";
          document.querySelector(".splide").style.display = "block";
          // document.querySelector(".referenzen1-popup-image img").src = image.getAttribute("src")
        };
      });

    document.querySelector(".referenzen1-popup-image span").onclick = () => {
      document.querySelector(".referenzen1-popup-image").style.display = "none";
    };
    // document.querySelector(".referenzen1-popup-image").onclick = () => {
    //     document.querySelector(".referenzen1-popup-image").style.display = "none"
    // }
  }, []);

  return (
    <div className="referenzen1-container py-12">
      <div className="referenzen1-image-container">
        {bilder.map((bild, index) => (
          <div className="referenzen1-image referenzen1-up-parent">
            <div className="relative">
              <img src={bild} alt="bild" className="" />
              <div className=" referenzen1-up-child referenzen1-span-down absolute px-2 bottom-0  w-full bg-black bg-opacity-50 ">
                <span className="  text-white text-xl font-bold">
                  Irgendein-Projekt
                
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="referenzen1-popup-image referenzen1-imagePopup-fadeIn ">
        <span>&times;</span>

        <div className="">
          <Splide 
            options={{
              arrows: true,
              perMove: 1,
            }}
            style={{ backgroundColor: "" }}
          >
            {bilder.map((bild, index) => (
              <SplideSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={bild}
                  alt=""
                  className="height-[80%] w-full mt-[200px] sm:mt-24 md:mt-0"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Referenzen1;
