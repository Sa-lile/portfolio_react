import React, { useState } from "react";
import { works } from "../../constants/data";
import "./Work.css";
import { BsPlusLg } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { FaGithub } from 'react-icons/fa';

const Work = ()=> {
  const [imageMdal, setImageModal] = useState(false);
  const [imageSource, setImageSource] = useState("");

  const setImageOnModal = (src) => {
    setImageModal(true);
    setImageSource(src);
  };

  return (
    <div className="work section-p bg-grey" id="wrok">
      <div className="image-box">
        <div className="image-box-content">
          <img src={imageSource} alt="" />
          <span
            className="image-box-close-btn"
            imgCancelCircle
            size={30}
          ></span>
        </div>
      </div>

      <div className="container">
        <div className="work-content">
          <div className="section-title">
            <h3 className="text-brown">
              mon <span className="text-dark">portfolio</span>
            </h3>
            <p className="text">
              Voici mes réalisations effectuées pendant la formation de
              Développeur web/web moble en 2022, <br />
              le contrat d'alternance un an en 2023 et mes
              projets personnels
            </p>
            <p className="text">N’hésitez pas à consulter d'autre mes réalisations sur mon GitHub :  
        <a href = "https://github.com/Sa-lile" className='text-black'><FaGithub /></a></p> 
          </div>
        </div>

        <div className="work-list grid">
          {works.map((work, index) => {
            return (
              <div
                className="work-item text-center"
                key={index}
                onClick={() => setImageModal({ image: work.image, site: work.site })}
                >
                <img src={work.image} alt="" />
                <span className="work-item-icon">
                  <BsPlusLg size={30} className="text-brown" />
                </span>
                <div className="work-item-text">
                  <p className="fs-22 fw5 op-08">{work.title}</p>
                  <p className="text mx-auto">{work.comment}</p>
                  <button className="button-visit">
                  <a href={work.site} target="_blank" rel="noopener noreferrer">
            Visit Site
          </a></button>
          <button className="button-visit">
          <a href={work.git} target="_blank" rel="noopener noreferrer">
            GitHub
          </a></button>
                </div>
              </div>
            );
          })}
        </div>  
      
      </div>
    </div>
  );
}

export default Work;
