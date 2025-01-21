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


 const registerLinkAndMore = () => {
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
      <div className="social">
        <ul className="sociallist">
          <li className="sociallistitem">
          <a href="" target="_blank">
          <motion.img 
            src={instagram}  
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

export default registerLinkAndMore;