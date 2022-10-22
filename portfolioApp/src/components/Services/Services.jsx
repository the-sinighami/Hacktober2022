import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { motion } from 'framer-motion';
const Services = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id='Services'>

    {/* left side */}
    <div className="awesome">
    <span>My Awesome</span>
    <span>services</span>
    <spane>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
         Temporibus laboriosam facere, aspernatur similique eaque labore.</spane>
    <a href={Resume} download>
    <button className="button s-button">Download CV</button>
    </a>
    
    <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
    </div>

    {/* right side */}
    <div className="cards">
       <motion.div 
       initial={{ left: "25rem" }}
       whileInView={{ left: "14rem" }}
       transition={transition}
      >
            <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {"Figma , Sketch , Photoshop , Adobe , Adobe xd"}
            />   
        </motion.div> 
                {/* secoond card*/}
        <motion.div
         initial={{ left: "-11rem", top: "12rem" }}
         whileInView={{ left: "-4rem" }}
         transition={transition}
        >
        <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html , Css, JavaScript, React, Nodejs, Express Js , API , github"}
        />
        </motion.div>

        {/* 3 card*/}
        <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}>
        
            <Card
                emoji={Humble}
                heading={"UI/UX"}
                detail={"Lorem ipsum test are usually use in section where we need some text would fill the space"}
            />

        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
    
  )
}

export default Services