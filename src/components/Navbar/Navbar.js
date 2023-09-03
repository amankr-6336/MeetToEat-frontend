import React, { useState } from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import {RxCross1} from 'react-icons/rx'
import logo1 from '../../assets/meet-to-eat-low-resolution-logo-black-on-transparent-background.png';


function Navbar() {

   const[open ,setOpen ]=useState(false);


   return (
      <>
         <div className="navbar">

            <div className="innernavbar">
               <div className="leftlogo">
                  <img src={logo1} alt="" />
               </div>
               <div className="center">
                  <ul>
                     <li><NavLink to='/'>HOME</NavLink> </li>
                     <li><NavLink to='/AboutUs'>ABOUT</NavLink> </li>
                     <li><NavLink to='/Blog'>BLOG</NavLink> </li>
                     <li ><NavLink to='/gallery'>GALLERY</NavLink> </li>
                     <li><NavLink to='/contactUs' >CONTACT US</NavLink> </li>
                  </ul>
               </div>
               <div className="right">
                      <div className="innerrightbar" onClick={()=>setOpen(true)}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
               </div>
            </div>
         </div>

         <div className={open? "slidernavbar" :"slidernavbar2"}>
           <div className="cancel" onClick={()=>setOpen(false)}><RxCross1 className='cl'/></div>
            <ul>
               <li><NavLink to='/'>HOME</NavLink> </li>
               <li><NavLink to='/AboutUs'>ABOUT</NavLink> </li>
               <li><NavLink to='/Blog'>BLOG</NavLink> </li>
               <li ><NavLink to='/gallery'>GALLERY</NavLink> </li>
               <li><NavLink to='/contactUs' >CONTACT US</NavLink> </li>
            </ul>
         </div>

      </>

   )
}

export default Navbar