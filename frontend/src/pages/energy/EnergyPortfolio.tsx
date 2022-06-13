import logo from "/styles/img/core-img/logo2.png";
import Image from "next/image";

import React from "react";

const portfolioImages = [
  require("/styles/img/energy-img/energy-1.JPG"),
  require("/styles/img/energy-img/energy-2.jpg")
];

const EnergyPortfolio = () => {


  return (
      <div className="pixel-portfolio-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-hedading text-center wow fadeInUp" data-wow-delay="100ms">
                <Image src={ logo } alt="logo" />
              </div>
            </div>
          </div>
        </div>

        <section className="content-main-section bg-white wow fadeInUp" data-wow-delay="100ms">
          <div className="container">
            <h3 className="mb-5 text-center">СИСТЕМЫ ГАРАНТИРОВАННОГО ЭЛЕКТРОСНАБЖЕНИЯ
                                             проектирование поставка и монтаж систем гарантированного
                                             электроснабжения</h3>
            <div className="row gs">
              {
                portfolioImages.map((img, index) => (
                    <div className="col-md-6 col-sm-12 inner-right-sm p-3" key={ index }>
                      <Image src={ img } />
                    </div>
                ))
              }

            </div>
          </div>
        </section>
      </div>
  );
};

export default EnergyPortfolio;
