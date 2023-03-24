import React from "react";
import "./bilderGallery1.css";
import bild from "../../assets/cat.jpg";
import bild1 from "../../assets/hund.jpg";
import bild2 from "../../assets/behandlung.jpg";
import bild3 from "../../assets/farmhaus.jpg";

const BilderGallery1 = () => {

    document.querySelectorAll(".image-container img").forEach(image => {
        image.onclick = () => {
            document.querySelector(".popup-image").style.display = "block";
            document.querySelector(".popup-image img").src = image.getAttributes("src")
        }
    })

    document.querySelector(".popup-image span").onclick = () => {
        document.querySelector(".popup-image").style.display = "none"
    } 

  return (
    <div className="container ">
      <div className="image-container">
        <div className="image">
          <img src={bild} alt="bild" className="image" />
        </div>
        <div className="image">
          <img src={bild1} alt="bild1" className="image" />
        </div>
        <div className="image">
          <img src={bild2} alt="bild2" className="image" />
        </div>
        <div className="image">
          <img src={bild3} alt="bild3" className="image" />
        </div>
        <div className="image">
          <img src={bild3} alt="bild3" className="image" />
        </div>
        <div className="image">
          <img src={bild3} alt="bild3" className="image" />
        </div>
      </div>
      <div className="popup-image">
        <span>&times;</span>
        <img src={bild} alt="" />
      </div>
    </div>
  );
};

export default BilderGallery1;
