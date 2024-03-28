import React from "react";
import "./Services.css";
import { services } from "../../constants/data";
// import { FaFileAlt } from "react-icons/fa";
import MonCV from "../../assets/images/CV_SachiyoSABLE.pdf";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services section-p" id="services">
      <div className="container">
        <div className="services-content">
          <div className="section-title">
            <h3 className="text-brown">
              mon<span className="text-dark">parcours</span>
            </h3>
            <p className="text">
              Je vous presente mon parcours. 
              <Link
                to={MonCV}
                download="Example-PDF-document"
                target="_blank"
                rel="noreferrer"
              >
                <button class="button">Download CV</button>
              </Link><br />
              {/* <a href={pdfCV} target="_blank" rel="noopener noreferrer">
                <FaFileAlt  onClick={onButtonClick}/> 
                <button onClick={onButtonClick}>
                    Download PDF
                </button> 
              </a> */}
            </p>
          </div>

          <div className="services-list grid">
            {services.map((service, index) => {
              return (
                <div className="services-item text-center" key={index}>
                  <div className="services-item-img">
                    <img src={service.image} className="mx-auto" alt=""></img>
                  </div>
                  <div className="services-item-text">
                    <h4 className="fs-22 fw5 op-08">{service.title}</h4>
                    <p className="text mx-auto">{service.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
