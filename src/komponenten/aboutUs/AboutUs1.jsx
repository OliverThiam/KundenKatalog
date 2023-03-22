import React from 'react'
import bild from "../../assets/react.svg"

const AboutUs1 = () => {
  return (
    <section id="über-uns" className="bg-primary1 ">
    <div className="p-6 pt-12 flex flex-col md:flex-row pb-12">
      <div data-aos="zoom-in" className="md:w-[65%] md:my-auto px-4 sm:px-8 mb-4 md:mb-auto">
        <div className="">
          <h2 className="text-3xl sm:text-4xl uppercase  mb-4">
            Dein Unternhemensname
          </h2>
        </div>
        <hr className="my-4 h-0.5 border-none bg-black" />

        <div className="">
          <p>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ipsam sapiente eaque dolorem tenetur alias earum excepturi
          laudantium maiores, nam ab impedit? Dolores delectus quod, error
          aliquam sed debitis minima! <br className="mb-4" /> Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Iusto, officia quasi,
          quisquam ipsa at corporis perspiciatis quibusdam eveniet commodi
          velit magnam error repudiandae, iste fugiat libero dolores. Rerum,
          sit quos. <br className="mb-4" /> Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Nesciunt dolorem perspiciatis hic.
          Quasi dignissimos fuga quia voluptates labore rerum deserunt sunt
          eligendi laborum aperiam officiis magnam, a, optio at amet.{" "}
        
          </p>
        </div>
      </div>
      <div data-aos="zoom-in" className="md:w-[35%] px-4 sm:px-8 ">
        <div>
          <img src="" alt="bild1" className="md:h-[200px] w-full mb-4 md:pl-4" />
        </div>
        <div>
          <img src="" alt="bild2" className="md:h-[200px] w-full mb-4 md:pl-4" />
        </div>
        <div>
          <img src="" alt="bild3" className="md:h-[200px] w-full mb-4 md:pl-4 hidden md:block" />
        </div>
       
      </div>
    </div>
  </section>
  )
}

export default AboutUs1