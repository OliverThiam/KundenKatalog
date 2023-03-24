import { Call, Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";

const Footer2 = () => {
  return (
    <footer className="bg-black text-white p-6 py-12">
      <div className="flex flex-col sm:flex-row justify-around">
        <div className="mb-6 sm:mb-0">
          <p className="text-3xl">Logo</p>
        </div>
        <div className="mb-6 sm:mb-0">
          <p className="text-lg font-bold mb-2">Informationen</p>
          <div className="flex flex-col">
            <a href="#">Home</a>
            <a href="#">Über uns</a>
            <a href="#">Team</a>
            <a href="#">Referenzen</a>
          </div>
        </div>
        <div className="mb-6 sm:mb-0">
          <p className="text-lg font-bold mb-2">Kontakt</p>
          <p>Telefon: 0140-9394509</p>
          <p>E-Mail: ernst@outlook.de</p>
          <p>Erreichbarkeit:</p>
          <p>Mo - Fr: 09:00 Uhr - 18:00 Uhr</p>
        </div>
        <div>
          <p className="text-lg font-bold ">Erreichbar unter</p>
          <div className="flex flex-row">
            <div className="p-1">
              <Instagram />
            </div>
            <div className="p-1">
              <Facebook />
            </div>
            <div className="p-1">
              <WhatsApp />
            </div>
            <div className="p-1">
              <Call />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
