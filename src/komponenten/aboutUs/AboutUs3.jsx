import React from "react";
import bild from "../../assets/hund.jpg"

const AboutUs3 = () => {
  return (
    <section className="p-6 py-12 ">
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="max-w-[600px] p-6  rounded">
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl ">Über uns</h2>
          </div>
          <hr className="mb-4"/>
          <div className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              delectus, sit nemo quod ab quaerat accusamus totam sint dicta.
              Totam nam ea modi quaerat eum magnam soluta facilis porro
              temporibus?
              <br className="mb-4"/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              delectus, sit nemo quod ab quaerat accusamus totam sint dicta.
              Totam nam ea modi quaerat eum magnam soluta facilis porro
              temporibus?
            </p>
          </div>
          <div className="py-4">
            <a href="#" className="bg-gray-300 text-gray-900 p-4 px-8 rounded">Kontakt</a>
          </div>
        </div>
        <div className=" p-6">
          <img src={bild} alt="bild" className=" sm:min-w-[300px]"/>
        </div>
      </div>
    </section>
  );
};

export default AboutUs3;
