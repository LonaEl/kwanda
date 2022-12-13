import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Agriculture and Young. All rights reserverd</p>
      <p className="icons">
        <a href='/www.instagram.com' target="_blank">
        <AiFillInstagram />
        </a>
        <a href='https://twitter.com/Agric_young' target="_blank">
        <AiOutlineTwitter />
        </a>
        <a href='https://www.facebook.com/Agricultureandyoung' target="_blank">
        <AiFillFacebook  />
        </a>
       </p>
    </div>
  )
}

export default Footer