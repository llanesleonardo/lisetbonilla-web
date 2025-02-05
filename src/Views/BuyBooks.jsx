import React from 'react'
import Books from '../Components/Books'
import ResponsiveMenu from '../Components/ResponsiveMenu';
import wa from "../assets/whatsapp.png";
import '../App.css'
import header from '../assets/header.png'
import phone from '../assets/phone.png'
import tiktok from '../assets/tiktok2.png'
import faceinsta from '../assets/faceinsta2.png'
import world from '../assets/world2.png'

export default function BuyBooks() {
  return (
    <div id="container">
    <div id="headerwrapper">
      <ResponsiveMenu />
    <div id="header">

        </div>
      </div>
      <div id='maincontentbooks'>
      <Books />
      </div>
               <div id="businesscontactwrapper">
               <div id="businesscontact">
         {/**
                 <div className="imagebusinesscontact">
                 <img src={phone} className="imagebusinesscontact_img"/>
                 </div>
                 <div className="phonebusinesscontact">
                 </div>
          */}
                 
                 <img src={phone} className="imagebusinesscontact_img"/>
                 <p>Para contrataciones: (520)991 9203</p>
            
               </div>
               </div>
               <div id="socialcontactwrapper">
               <div id="socialcontact">
               <div id="socialcontact1">
            
                         <p>    <img src={world} className="imagebusinesscontact_img1"/>www.lisetbonilla.com</p>
                 </div>
                 <div id="socialcontact2">
                         
                         <p> <img src={faceinsta} className="imagebusinesscontact_img2"/>Liset Bonilla</p>
                 </div>
                 <div id="socialcontact3">
                 
                         <p> <img src={tiktok} className="imagebusinesscontact_img3"/>Liset Bonilla.422</p>
                 </div>
               </div>
               </div>
    </div>
  )
}
