import React,{useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Api() {
    const [data,setData]= useState([])
    const [single,setSingle]= useState([])
    useEffect(()=>{
        //axios.get - to get data
        //axios.post - to get post(insert)
        //axios.put - to update 
        //axios.delete - to delete
        axios.get("https://dummyjson.com/quotes")
        .then((res)=>{
            console.log(res.data.quotes,11111)
            setData(res.data.quotes)
        })
        .catch((err)=>{
            console.log(err,22222)
        })
        axios.get("https://dummyjson.com/quotes/random")
        .then((res)=>{
            console.log(res.data,9999)
            setSingle(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(data,3333)
  return (
    <div>
        <h1>This is Api page</h1>
        <h1>Quote of the day: {single.quote}</h1>
        {data.map((item)=>{
            return(
            <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Accordion {item.author}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.quote}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )})}
        <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        
    </div>
  )
}
