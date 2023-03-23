import React from "react";
import bild from "../../assets/hund.jpg";

const TeamCard1 = (props) => {
  return (
    <div className="w-full mt-3  h-[400px] relative bg-gray-200 border-black">
      <div>
        <img src={bild} alt="" className="max-h-[250px] w-full" />
      </div>
      <div className="p-4">
        <p className="mb-2 text-xl">{props.name}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          recusandae
        </p>
      </div>
    </div>
  );
};

export default TeamCard1;
