import React from 'react'

import {FaCopyright, FaInstagram} from "react-icons/fa"; 
import {FaGithub} from "react-icons/fa"; 
import {FaLinkedin} from "react-icons/fa"; 

export default function Footer(props) {
   
  return (
    <>
     <footer id="footer">
      <div className="footer-1 " style={props.themeColor2}>
        <ul id="footer-ul" className='theme-toggle'>
          <li><a href="https://www.instagram.com/chr7s.dsouza/" target='_blank'><FaInstagram className='Icon'/></a></li>
          <li><a href="https://github.com/chr7s-xyz" target='_blank'><FaGithub className='Icon' /></a></li>
          <li><a href="https://www.linkedin.com/in/chris-dsouza-55719b245/" target='_blank'><FaLinkedin className='Icon' /></a></li>
         </ul>
      <div id="footer-11" className='theme-toggle' >
        <p id='footer-para'>Made by @Chris Dsouza</p>
       
      </div>
      </div>
      
      <div className="footer-2" style={props.themeColor}>
        <FaCopyright />
        Copyrights reserved '23</div>
    </footer>
    
    </>
  )
}
