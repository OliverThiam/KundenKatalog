import React from "react";
import TeamCard1 from "./TeamCard1";

const Team1 = () => {
  return (
    <section>
      <div className="p-6 py-12 bg-gray-300 flex flex-col sm:flex-row">
        <div className="sm:w-1/2 sm:mr-2">
          <h2 className="text-3xl sm:text-4xl uppercase  mb-4">Unser Team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab
            facere tempora sed velit, aspernatur repellendus reprehenderit ea
            mollitia eligendi soluta natus, enim sapiente atque. Beatae fugiat
            facilis praesentium! Vero.
            <br className="mb-2"/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab
            facere tempora sed velit, aspernatur repellendus reprehenderit ea
            <br className="mb-2"/>
            mollitia eligendi soluta natus, enim sapiente atque. Beatae fugiat
            facilis praesentium! Vero.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab
            facere tempora sed velit, aspernatur repellendus reprehenderit ea
            mollitia eligendi soluta natus, enim sapiente atque. Beatae fugiat
            facilis praesentium! Vero.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab
            <br className="mb-2"/>
            facere tempora sed velit, aspernatur repellendus reprehenderit ea
            mollitia eligendi soluta natus, enim sapiente atque. Beatae fugiat
            facilis praesentium! Vero.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab
            facere tempora sed velit, aspernatur repellendus reprehenderit ea
            mollitia eligendi soluta natus, enim sapiente atque. Beatae fugiat
            facilis praesentium! Vero.
          </p>
        </div>
        <div className="sm:w-1/2 md:ml-2 grid sm:grid-cols-2 gap-4 justify-items-start sm:justify-items-end  ">
            <div className="">
                <TeamCard1 name="Name Nachname"/>
            </div>
            <div>
                <TeamCard1 name="Name Nachname"/>
            </div>
            <div>
                <TeamCard1 name="Name Nachname"/>
            </div>
            <div>
                <TeamCard1 name="Name Nachname"/>
            </div>
            <div>
                <TeamCard1 name="Name Nachname"/>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default Team1;
