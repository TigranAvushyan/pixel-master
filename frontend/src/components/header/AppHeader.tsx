import logo from "/styles/img/core-img/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppHeader = () => (
        <header className="header-area">
          <div className="pixel-main-menu" id="sticker">
            <div className="classy-nav-container breakpoint-off">
              <div className="container-fluid">
                <nav className="classy-navbar justify-content-between" id="pixelNav">
                  <Link href="/">
                    <a className="nav-brand">
                      <Image src={ logo } alt="logo" />
                    </a>
                  </Link>

                  <div className="classy-navbar-toggler">
                    <span className="navbarToggler"><span /><span /><span /></span>
                  </div>

                  <div className="classy-menu">

                    <div className="classycloseIcon">
                      <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                    </div>

                    <div className="classynav">
                      <ul>
                        <li><Link href={ "/" }><a>Главная</a></Link></li>
                        <li><Link href={ "about.html" }><a>О нас</a></Link>
                        </li>
                        <li></li>
                        <li><Link href={ "#" }><a>Продукция и Услуги</a></Link>
                          <div className="megamenu">
                            <ul className="single-mega cn-col-4">
                              <li><Link href="security.html"><a>Безопасность</a></Link></li>
                              <li><Link href="video.html"><a>Видеонаблюдение</a></Link></li>
                              <li><Link href={ "/energy" }><a>Электроснабжения</a></Link></li>
                              <li><Link href="dispet.html"><a>Диспетчеризация</a></Link></li>
                              <li><Link href="radio.html"><a>Системы Радиосвязи</a></Link></li>
                              <li><Link href="traker.html"><a>Мониторинг Мобильных объектов</a></Link></li>
                              <li><Link href="trainbez.html"><a>Транспортная Безопасность</a></Link></li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li><Link href="telefonia.html"><a>Системы телефонии</a></Link></li>
                              <li><Link href="dispetsvyas.html"><a>Системы диспетчерской связи</a></Link></li>
                              <li><Link href="telemetria.html"><a>Сбор телеметрической информации</a></Link></li>
                              <li><Link href="monition.html"><a>Мониторинг техногенных обьектов</a></Link></li>
                              <li><Link href="contact.html"><a>Доступ к ресурсам сетей РЖД</a></Link></li>
                              <li><Link href="setirzd.html"><a>Доступ к ресурсам сетей РЖД</a></Link></li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li><Link href="proect.html"><a>Проектирование и сопровождение</a></Link></li>
                              <li><Link href="work.html"><a>Общестроительные работы </a></Link></li>
                              <li><Link href="services.html"><a>Инженерные сети</a></Link></li>
                              <li><Link href="naladka.html"><a>ПускоНаладка</a></Link></li>
                              <li><Link href="shefmontzh.html"><a>Шеф-Монтаж</a></Link></li>
                              <li><Link href="tehnadzor.html"><a>Технадзор</a></Link></li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li><Link href="metall.html"><a>Металлообработка</a></Link></li>
                              <li><Link href="lazer.html"><a>Лазерный раскрой металла </a></Link></li>
                              <li><Link href="gibka.html"><a>Гибка на ЧПУ</a></Link></li>
                              <li><Link href="svarka.html"><a>Сварка в среде защитных газов</a></Link></li>
                              <li><Link href="pokraska.html"><a>Предпокрасочная Подготовка и покраска</a></Link></li>
                              <li><Link href="pilomaterial.html"><a>Пиломатериал</a></Link></li>
                            </ul>
                          </div>
                        </li>
                        <li><Link href="contact.html"><a>Контакты</a></Link></li>
                      </ul>

                      <div className="top-social-info ml-5" />
                    </div>
                  </div>


                </nav>
              </div>
            </div>
          </div>
        </header>
    )
;

export default AppHeader;
