import React from 'react'

const AboutUs2 = () => {
  return (
    <section id="über-uns" className="bg-gray-100 p-6 py-12">
    <div className="flex flex-col sm:flex-row ">
      <div className="sm:w-1/2 px-4 mb-4">
        <img src="" alt="überuns" className="sm:h-[450px]" />
      </div>
      <div className="sm:w-1/2 px-4">
        <div>
          <h2 className="text-2xl sm:text-3xl uppercase">
            Dein Unternehmensname
          </h2>
          <p className="text-xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
          illum enim? Saepe voluptatibus iste unde aliquam earum cumque
          laborum reiciendis aspernatur dolor laudantium. Eum delectus debitis
          odio! Voluptatibus, alias commodi.
          <br className="mb-4" />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
          illum enim? Saepe voluptatibus iste unde aliquam earum cumque
          laborum reiciendis aspernatur dolor laudantium. Eum delectus debitis
          odio! Voluptatibus, alias commodi.
          <br className="mb-4" />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
          illum enim? Saepe voluptatibus iste unde aliquam earum cumque
          laborum reiciendis aspernatur dolor laudantium. Eum delectus debitis
          odio! Voluptatibus, alias commodi.
        </p>
      </div>
    </div>
  </section>
  )
}

export default AboutUs2