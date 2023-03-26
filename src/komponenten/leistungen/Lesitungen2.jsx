import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import { faq1, faq2 } from "./lesitungen2Content";
import bild from "../../assets/hund.jpg";

const Lesitungen2 = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [expanded2, setExpanded2] = React.useState(false);

  const handleChange2 = (panel2) => (event, isExpanded2) => {
    setExpanded2(isExpanded2 ? panel2 : false);
  };

  return (
    <section className="p-6 py-12">
      <div className="">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch mb-8 ">
          <div className="w-full sm:w-1/2 md:max-w-[450px] sm:p-4">
            <div className="mb-2">
              <h2 className="text-2xl sm:text-3xl">Überschrift</h2>
            </div>
            <div className="mb-4">
              {faq1 == null
                ? console.log("null")
                : faq1.leistungen.map((faq, index) => (
                    <div className="border-b-[1px] ">
                      <Accordion
                        key={index}
                        sx={{ pr: 2, boxShadow: "none",  }}
                        className=""
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                      >
                        <AccordionSummary
                        className=""
                          sx={{ padding: 0,  }}
                          expandIcon={<ExpandMore className="" />}
                        >
                          <p className=" w-full">{faq.leistung}</p>
                        </AccordionSummary>
                        <AccordionDetails sx={{}}>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  ))}
            </div>
          </div>
          <div className="">
            <img src={bild} alt="" className="sm:max-h-[300px] md:w-[450px] rounded-3xl sm:p-4" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch ">
          <div className="hidden sm:block ">
            <img src={bild} alt="" className="sm:max-h-[300px] md:w-[450px] rounded-3xl sm:p-4" />
          </div>
          <div className="w-full sm:w-1/2 md:max-w-[450px] sm:p-4">
            <div className="mb-2">
              <h2 className="text-2xl sm:text-3xl">Überschrift</h2>
            </div>
            <div className="mb-4">
              {faq2 == null
                ? console.log("null")
                : faq2.leistungen.map((faq, index) => (
                    <div className="border-b-[1px] ">
                      <Accordion
                        key={index}
                        sx={{ pr: 2, boxShadow: "none" }}
                        className=""
                        expanded={expanded2 === `panel2${index}`}
                        onChange={handleChange2(`panel2${index}`)}
                      >
                        <AccordionSummary
                          sx={{ padding: 0 }}
                          expandIcon={<ExpandMore className="" />}
                        >
                          <p className=" w-full">{faq.leistung}</p>
                        </AccordionSummary>
                        <AccordionDetails sx={{}}>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>{faq.bereich}</p>
                            <p>{faq.preis}</p>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  ))}
            </div>
            <div className="block sm:hidden ">
            <img src={bild} alt="" className="sm:max-h-[300px] rounded-3xl" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lesitungen2;
