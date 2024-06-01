"use client";

import React, { useState, useEffect } from 'react';
import QuienesSomosCSS from "./QuienesSomos.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InstagramBtn, WebsiteBtn, PhoneBtn, PhysicalLocationBtn } from "../components/openLinkButtons/ExternalLinkBtns.jsx";
import Link from 'next/link';

export default function QuienesSomos(url) {

  const returnArrow = "/assets/icons/returnArrow.svg";
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 400);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={QuienesSomosCSS.quienesSomosBody}>
      <Container>
        
        <Row className="justify-content-center align-items-center mt-5">

          {/* Top Row : Title & Return Button */}
          <Row>
            <Col >
              {/* Add a NextJS link */}
              <Link href="/">
                <button className={QuienesSomosCSS.returnBtn}>
                  <img src={returnArrow} alt="" />
                </button>
              </Link>
            </Col>
            <Col>
              <h1 className={QuienesSomosCSS.title}>Quienes</h1>
              <h1 className={QuienesSomosCSS.title}>Somos</h1>
            </Col>
            <Col></Col>
          </Row>
          {/* Image Col */}
          <Row>
            <img
              className={QuienesSomosCSS.imgContainer}
              src="https://res.cloudinary.com/dsx9xiq32/image/upload/v1707327697/FindMyEnxilados/zpug7aie1w9tixsat9d6.png" alt="enxiladosImg"
            ></img>
          </Row>

        </Row>
        {/* Business description Row */}
        <Row>
          <Col>
            <div className={QuienesSomosCSS.descriptionBox}>
              <p className={QuienesSomosCSS.descriptionText}>
                Somos una empresa mexicana dedicada a la integración de sabores entre dulces comunes y nuestro gran toque especial.
                Nuestros productos son elaborados con ingredientes de la más alta calidad y en las mejores condiciones, para darle un giro de sabor a nuestra selección de dulces, conservando el inigualable sabor Enxilado.
              </p>
            </div>
          </Col>
        </Row>
        {/* External Links Buttons */}
        <Row>
          <Col>
            <div className={QuienesSomosCSS.externalLinksContainer}>
              <InstagramBtn url={"https://www.instagram.com/_enxilados/"} />
              {/* <WebsiteBtn url={"https://enxilados.com.mx/"} /> */}
            </div>
            <div className={QuienesSomosCSS.externalLinksContainer}>
              <PhoneBtn />
              {!isMobileView && <span></span>}
              {!isMobileView && <PhysicalLocationBtn url={"https://maps.app.goo.gl/9TS6mDhL5K2ZVSGd7"} />}
            </div>
            {isMobileView && (
              <div className={QuienesSomosCSS.externalLinksContainer}>
                <PhysicalLocationBtn url={"https://maps.app.goo.gl/9TS6mDhL5K2ZVSGd7"} />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}