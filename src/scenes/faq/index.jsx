import React from 'react'
import { Box,Typography,useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from '../../theme';
import Header from '../../components/Header';


const FAQ = () => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  return (
    <Box sx={{margin:"20px"}}>
      <Header title={"FAQ"} subtitle={"Frequently asked questions"}/>
      <Accordion>
        <AccordionSummary>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important Question 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorum ipsum iddfa kkdfsdf dsfgaqrgin asdklfuhkjjkhdsf fjuhe3u7h jdhfj dfjhaj dfej.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important Question 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorum ipsum iddfa kkdfsdf dsfgaqrgin asdklfuhkjjkhdsf fjuhe3u7h jdhfj dfjhaj dfej.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important Question 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorum ipsum iddfa kkdfsdf dsfgaqrgin asdklfuhkjjkhdsf fjuhe3u7h jdhfj dfjhaj dfej.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Another Important Question 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorum ipsum iddfa kkdfsdf dsfgaqrgin asdklfuhkjjkhdsf fjuhe3u7h jdhfj dfjhaj dfej.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ