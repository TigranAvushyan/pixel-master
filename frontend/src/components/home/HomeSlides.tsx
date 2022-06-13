import React from "react";

const slides = [
  "./styles/img/bg-img/1.jpg",
  "styles/img/bg-img/2.jpg"
];


const HomeSlides = () => {


  return (
      <section className="hero-area">
        <div className="hero-slideshow owl-carousel">
          {
            slides.map((imageUrl, index) => (
                <div className="single-slide" key={ index }>
                  <div className="slide-bg-img bg-img" style={ { backgroundImage: `url(${ imageUrl })` } } />
                  <div className="container h-100">
                    <div className="row h-100 align-items-center">
                      <div className="col-12 col-lg-9">
                        <div className="welcome-text">
                          <h2 data-animation="fadeInUp" data-delay="300ms"><span>Креативное Агенство </span><br /></h2>
                          <h4 data-animation="fadeInUp" data-delay="500ms">Безопасности <span>IT-технологий</span></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))
          }

        </div>
      </section>
  );
};

export default HomeSlides;
