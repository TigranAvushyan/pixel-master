import footerLogo from "/styles/img/core-img/logo2.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const AppFooter = () => {
  return (
      <footer className="footer-area section-padding-100-0">
        <div className="container-fluid">
          <div className="row justify-content-between">

            <div className="col-12 col-sm-6 col-md-3">
              <div className="single-footer-widget mb-100">
                <Link href="/">
                  <a className="footer-logo"><Image src={ footerLogo } alt="footer-logo" /></a>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-9 col-lg-8 col-xl-7">
              <div className="row">

                <div className="col-sm-4">
                  <div className="single-footer-widget mb-100">
                    <h5 className="widget-title">Контакты</h5>
                    <p><i className="fa fa-phone" /> <br />+7 499 623 62 50</p>
                    <p><i className="fa fa-phone" /> <br />+7 926 149 20 75</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copywrite-area">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="copywrite-content">
                  <p className="copywrite-text">
                    <span>&copy; </span>
                    <span>{ new Date().getFullYear() } </span>
                    <span>All rights reserved | This site is made with </span>
                    <i className="fa fa-heart-o" aria-hidden="true" />
                    <span> by </span>
                    <Link href="https://iksline.com"><a target="_blank">IKSLine</a></Link>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <nav className="footer-nav">
                  <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default AppFooter;
