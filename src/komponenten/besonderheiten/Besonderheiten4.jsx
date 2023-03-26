import { Add, Percent, PlusOne } from "@mui/icons-material";
import React, { useEffect, useRef } from "react";

const Besonderheiten4 = () => {
  const valueDisplaysRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% of the element must be visible to trigger the intersection
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const valueDisplay = entry.target;
          let startValue = 0;
          let endValue = parseInt(valueDisplay.getAttribute("data-val"));
          let interval = 1000;
          let duration = Math.floor(interval / endValue);
          let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue === endValue) {
              clearInterval(counter);
            }
          }, duration);
          observer.unobserve(valueDisplay);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    valueDisplaysRef.current.forEach((valueDisplay) => {
      observer.observe(valueDisplay);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-800 p-6 py-12">
      <h2 className="text-2xl sm:text-3xl uppercase text-white mb-12 text-center">Unsere Zahlen sprechen für sich</h2>{" "}
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="mb-6 sm:mb-0 px-8">
          <div className="flex justify-center items-center ">
            <span
              className="num text-white text-4xl font-bold "
              data-val="400"
              ref={(el) => (valueDisplaysRef.current[0] = el)}
            >
              000
            </span>
            <Add
              sx={{ fontSize: 35, fontWeight: "bold" }}
              className="text-white"
            />
          </div>
          <span className="text-white text-lg ">Betreute Kunden</span>
        </div>
        <div className="mb-6 sm:mb-0 px-8">
          <div className="flex justify-center items-center ">
            <span
              className="num text-white text-4xl font-bold"
              data-val="98"
              ref={(el) => (valueDisplaysRef.current[1] = el)}
            >
              000
            </span>
            <Percent
              sx={{ fontSize: 35, fontWeight: "bold" }}
              className="text-white "
            />
          </div>
          <span className="text-white text-lg ">Zufriedene Kunden</span>
        </div>
        <div className="mb-6 sm:mb-0 px-8">
          <div className="flex justify-center items-center">
            <span
              className="num text-white text-4xl font-bold"
              data-val="323"
              ref={(el) => (valueDisplaysRef.current[2] = el)}
            >
              000
            </span>
            <Add
              sx={{ fontSize: 35, fontWeight: "bold" }}
              className="text-white"
            />
          </div>
          <span className="text-white text-lg ">Vermittelte Objekte</span>
        </div>
      </div>
    </div>
  );
};

export default Besonderheiten4;
