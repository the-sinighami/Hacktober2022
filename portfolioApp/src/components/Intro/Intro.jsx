import React, { useContext } from "react";
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Intro = () => {

    const transition = {duration : 2 , type: 'spring'}

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
        <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
            <span>Alok Rawat</span>
            <span>Frontend Developer in web desingning 
                and development, producting the 
                Quality work
            </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <a href='https://github.com/tonystark2121' target='_blank' rel="noopener noreferrer">
            <img src={Github} alt=""/>
            </a>
            <a href='https://www.linkedin.com/in/alok-rawat-293600203/' target='_blank'rel="noopener noreferrer">
            <img src={LinkedIn} alt=""/>
            </a>
            <a href='https://www.instagram.com/rajvanshi7721/' target='_blank' rel="noopener noreferrer">
            <img src={Instagram} alt=""/>
            </a>
            
        </div>
        
        
        </div>
        
        <div className="i-right">
        <img src={Vector1} alt=""/>
        <img src={Vector2} alt=""/>
        <img src={boy} alt=""/>
        <motion.img 
         initial={{ left: "-36%" }}
         whileInView={{ left: "-24%" }}
         transition={transition}
        src={glassesimoji} alt=""/>
        <motion.div 
        initial={{top: "-4%", left:"74%"}}
        whileInView={{left:'68%'}}
        transition={transition}
        className="floating-div"
        >
           <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </motion.div>
        <motion.div 
        initial={{left: '9rem', top:'18rem'}}
        whileInView={{left: '1rem'}}
        transition={transition}
        className="floating-div"
        >
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </motion.div>
        {/*blur divs */}
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur"
        style={{
            background: '#C1F5FF',
            top:'17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem'
        }}>

        </div>

        </div>
       
      
    </div>
  )
}

export default Intro
