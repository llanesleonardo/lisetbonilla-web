import React,{useState} from 'react'
import { motion } from 'framer-motion';

import "../App.css"
import profileImg from "../assets/profileliset.png"
import logoImg from "../assets/logoliset.png"
import cellphone from "../assets/cellphone.png"
import website from "../assets/website.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import tiktok from "../assets/tiktok3.png"
import youtube from "../assets/youtube.png"
import shareButton from "../assets/shareicon.png"
import whatsapp from "../assets/whatsapp.png";
import cafesemanal from "../assets/cafesemanal.png";
import ResponsiveMenu from '../Components/ResponsiveMenu';


 const BusinessCard = () => {
const [copyUrl,setCopyUlr] = useState(false);

const handleClick = async () =>{
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Liset Bonilla Website',
        text: 'Esencia de poder.',
        url: 'https://lisetbonilla.com/',
      });
      console.log('Content shared successfully');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  } else {
    console.log('Url shared successfully');
    navigator.clipboard.writeText('https://lisetbonilla.com/');
    setCopyUlr(true);
    setTimeout(() => {
      setCopyUlr(false);
    }, 3000);
  }

}

  return (
    <div className=" bgpink">
      <ResponsiveMenu />
      <div className="share">
      <p className="xsmalltext">{copyUrl ? 'Website link copiado a papelera': ''}</p>
        <motion.img 
            src={shareButton}  
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="shareImg" 
            onClick={handleClick}
            />


      </div>
      <div className="profile">
        <img src={profileImg} className="profileImg" />
      </div>
      <div className="logo">
      <img src={logoImg} className="logoImg" />
      </div>
      <div className="description">
        <p className="desctext">Escritora, Conferencista, Entrenadora y Mentora en transformación humana.</p>
        <p className="desctext"> He acompañado a mujeres en su crecimiento por más de veinte años.</p>
      </div>
      <div className="social">
        <ul className="sociallist">
        <li className="sociallistitem">
          <a href="https://lisetbonilla.com/weeklycoffee">
          <motion.img 
            src={cafesemanal}  
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="socialImg" 
            />
            </a>
          </li>
          <li className="sociallistitem">
          <a href="tel:15209919203">
          <motion.img 
            src={cellphone}  
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="socialImg" 
            />
            </a>
          </li>
          <li className="sociallistitem">
          <a href="https://lisetbonilla.com/" target="_blank">
          <motion.img 
            src={website}  
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="socialImg" 
            />
            </a>
          </li>
          <li className="sociallistitem">
          <a href="https://www.facebook.com/LisetBonillaEsencia/" target="_blank">
          <motion.img 
            src={facebook}  
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="socialImg" 
            />
            </a>
          </li>
          <li className="sociallistitem">
          <a href="https://www.instagram.com/lisetbonilla.esencia/" target="_blank">
          <motion.img 
            src={instagram}  
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="socialImg" 
            />
            </a>
          </li>
          <li className="sociallistitem">
          <a href="https://www.tiktok.com/@lisetbonilla422?lang=en" target="_blank">
          <motion.img 
            src={tiktok}  
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="socialImg" 
            />
            </a>
          </li>
          <li className="sociallistitem">
          <a href="https://www.youtube.com/@lisetbonilla.esencia5856" target="_blank">
          <motion.img 
            src={youtube}  
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="socialImg" 
            />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BusinessCard;