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
          let interval = 3000;
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
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className=" px-12">
          <div className="flex justify-center items-center">
            <span
              className="num text-white text-4xl font-bold "
              data-val="400"
              ref={(el) => (valueDisplaysRef.current[0] = el)}
            >
              000
            </span>
            <Add sx={{fontSize: 35, fontWeight:"bolder"}} className="text-white" />
          </div>
          <span>Betreute Kunden</span>

        </div>
        <div className=" px-12">
          <div className="flex justify-center items-center">
            <span
              className="num text-white text-4xl font-bold"
              data-val="400"
              ref={(el) => (valueDisplaysRef.current[1] = el)}
            >
              000
            </span>
            <Percent className="text-white "/>
          </div>
          <span>Zufriedene Kunden</span>
        </div>
        <div className=" px-12">
          <div className="flex justify-center items-center">
            <span
              className="num text-white text-4xl font-bold"
              data-val="400"
              ref={(el) => (valueDisplaysRef.current[2] = el)}
            >
              000
            </span>
            <Add />
          </div>
          <span>Vermittelte Objekte</span>
        </div>
      </div>
    </div>
  );
};

export default Besonderheiten4;
