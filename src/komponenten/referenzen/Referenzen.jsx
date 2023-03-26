import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import bild from "../../assets/hund.jpg";
import React from "react";

const Referenzen = () => {
  return (
    <div className="p-6 py-12 bg-gray-400">
      <div className="flex">
        <div>
          <Accordion sx={{}}>
            <AccordionSummary sx={{padding: 0}}
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{padding: 0}}>
              <img src={bild} alt="" className="h-full w-full" />
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{padding: 0}}>
              <img src={bild} alt="" className="h-full w-full" />
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Referenzen;
