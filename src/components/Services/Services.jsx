import React from "react";
import "./Services.css";
import { services } from "../../constants/data";
import { FaFileAlt } from "react-icons/fa";
// import { Document, Page } from "react-pdf";

const Services = () => {
  const cvFilePath = "./src/assets/images/CV_Sachiyo_S.pdf";

  return (
    <div className="services section-p" id="services">
      <div className="container">
        <div className="services-content">
          <div className="section-title">
            <h3 className="text-brown">
              mon<span className="text-dark">parcours</span>
            </h3>
            <p className="text">
              Je vous presente mon parcours. <br />
              Voici mon CV{" "}
              {/* <Document file={cvFilePath}>
                <Page pageNumber={1} />
                <FaFileAlt />
              </Document> */}
              <a
                href= {cvFilePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileAlt />
              </a>
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
