import React from 'react'
import {FaHome,FaUser} from "react-icons/fa"; 
 
export default function Navbar2(props) {
    
  return (
    <>
    <nav className='fixed-top' style={props.themeColor2}>
      <div className='themeDiv'>
       <button type="button" className="btn btn-primary buttonTheme"    id='dark' onClick={props.onClickDark} />
       <button type="button" className=" btn btn-primary buttonTheme"    id='light' onClick={props.onClickLight} />
     </div>

      <ul id="redirect">
       <li id='redirect-li0'>
        <a href="/">
         <FaHome className='Icon theme-toggle' id='Icon0'/>
        </a >
       </li>
    
       <li id='redirect-li3'>
        <a href="/">
         <FaUser className='Icon' />
        </a >
       </li>
     </ul>
</nav>
  </>
  )
}
