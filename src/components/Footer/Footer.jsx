import React from 'react';
import "./Footer.css";
// import { FaEnvelope, FaGithub, FaLinkedin, } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer bg-dark section-p' id = "footer">
        <div className='container'>
            <div className='footer-content'>
                <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>All Rights Reserved &copy; 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Footer