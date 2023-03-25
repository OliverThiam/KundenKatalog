import {
  AccessTimeOutlined,
  Call,
  LocationOnOutlined,
  MailOutline,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./kontakt3.css";

const Kontakt3 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  return (
    <section id="kontakt" className={` px-6 pb-12 pt-12 font-poppins 2`}>
      <div className="flex flex-col items-center justify-around sm:flex-row sm:mb-0 mx-0 sm:mx-4">
        <div className="flex flex-col sm:w-1/2 w-full max-w-[800px] ">
          <div
            data-aos="zoom-in"
            className="text-textgray mb-12 "
          >
            <h2 className="text-header text-3xl sm:text-4xl font-extrabold ">
              Kontakt
            </h2>
            <div className="flex pb-4">
              {/* <hr className="w-[100px] h-[2px] font-extrabold bg-textgray" />
        <hr className="w-[180px] h-[2px] font-extrabold bg-gray-300" /> */}
            </div>
            <p className="text-paragraph sm:mr-8 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate nostrum ipsum molestias deleniti fugiat! Quidem quo
              temporibus, delectus ad a facere magnam sunt libero numquam.
              Tempore hic esse praesentium ea.
            </p>
          </div>
          <div data-aos="zoom-in" >
            <form>
              <div className="flex flex-col space-y-6 mb-8 w-full">
                <div className="relative mb-6 ">
                  <input
                    required
                    id="name"
                    type="text"
                    onFocus={() => setNameFocus(true)}
                    onBlur={() => setNameFocus(false)}
                    className=" border-b-2 2 border-gray-400 focus:border-primary1 focus:outline-none w-[100%] sm:w-[90%] "
                  />
                  <label
                    htmlFor="name"
                    className={`transition-all duration-300 absolute left-0 bottom-2 ${
                      nameFocus || name
                        ? "text-gray-400 -translate-y-6"
                        : "text-gray-600"
                    }`}
                  >
                    Name
                  </label>
                </div>

                <div className="relative ">
                  <input
                    required
                    id="email"
                    type="email"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    className=" border-b-2 2 border-gray-400 focus:border-primary1 focus:outline-none w-[100%] sm:w-[90%] "
                  />
                  <label
                    htmlFor="email"
                    className={`transition-all duration-300 absolute left-0 bottom-2 ${
                      emailFocus || email
                        ? "text-gray-400 -translate-y-6"
                        : "text-gray-600"
                    }`}
                  >
                    Email
                  </label>
                </div>

                <div className="relative mt-4 ">
                  <textarea
                    required
                    id="message"
                    onFocus={() => setMessageFocus(true)}
                    onBlur={() => setMessageFocus(false)}
                    className=" border-b-2 2 border-gray-400 focus:border-primary1 focus:outline-none h-20 w-[100%] sm:w-[90%] resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className={`transition-all duration-300 absolute left-0 bottom-2 ${
                      messageFocus || message
                        ? "text-gray-400 -translate-y-20"
                        : "text-gray-600"
                    }`}
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-gray-500 rounded-lg text-buttonText py-4 text-textwhite w-[100%] sm:w-[90%] text-center hover:opacity-80 duration-100"
                >
                  <span className="uppercase">Abschicken</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="bg-gray-500 schatten max-w-[800px] sm:w-1/2 w-full sm:px-0 md:px-4 p-4 rounded-lg"
        >
          <div className=" text-textwhite">
            <h3 className="text-header text-2xl sm:text-3xl p-8 pb-6 px-0 sm:px-6 md:px-8 ">
              Kontakt Informationen
            </h3>

            <div className=" py-4 w-[40%] pl-0 sm:pl-6 md:pl-8">
              <hr className=" h-1 border-none" />
            </div>
          </div>
          <div className="text-textwhite ">
            <div className="mt-6 px-0 sm:px-6 md:px-8 pb-4">
              <MailOutline fontSize="large" className="text-header" />
              <span className="text-paragraph ml-2">ernst@outlook.de</span>
            </div>
            <div className="px-0 sm:px-6 md:px-8 py-4">
              <Call fontSize="large" className="text-header" />
              <span className="text-paragraph ml-2">01590-3444392</span>
            </div>
            <div className="px-0 sm:px-6 md:px-8 py-4">
              <LocationOnOutlined fontSize="large" className="text-header" />
              <span className="text-paragraph ml-2">
                Graf-Straße 22, 5003 Köln
              </span>
            </div>
            <div className="px-0 sm:px-6 md:px-8 py-4 pb-8">
              <AccessTimeOutlined fontSize="large" className="text-header" />
              <span className="text-paragraph ml-2">
                Mo - Fr: 09:00 Uhr - 18:000 Uhr
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt3;
