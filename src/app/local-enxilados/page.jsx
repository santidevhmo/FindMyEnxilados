
"use client";

import ResultTopContent from "../components/resultTopContent/ResultTopContent.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocalEnxiladosCSS from "./LocalEnxilados.module.css";
import React from "react";
import { shortestDistance } from "../searching/GetNearestStore";

import { PhoneBtn, InstagramBtn, WebsiteBtn, PuntosDeVentaBtn, OpenAppleMaps, OpenGoogleMaps } from "../components/openLinkButtons/ExternalLinkBtns.jsx";

export default function AbaceriaResult() {

  // Class variable created to have gx-0 + the CSS module class
  const cssModuleGxClass = `gx-0 ${LocalEnxiladosCSS.resultContainer}`;

  return (
    
    <div>
      <Container fluid className={cssModuleGxClass}>
        <Row className="justify-content-center">
          {/* ---- Top Row : ReturnBtn and Text ----- */}
          <ResultTopContent
            resultTitle={"Local Enxilados"}
            imageURL={"https://res.cloudinary.com/dsx9xiq32/image/upload/v1713918792/FindMyEnxilados/Screenshot_2024-04-23_at_18-33-00_QUIENES_SOMOS_bbyanj.png"}
            returnPath={"/"}
          />
        </Row>

        {/* ---- Information Row : Distance, external links, etc ----- */}
        <Row className="gx-2">
          {/* gx (Gutter) = "default spacing in Bootstrap Col's & Rows  */}
          {/* -- Distance Box */}
          {/* <Col xs={4} sm={3} md={3} lg={2}>
            <div className={LocalEnxiladosCSS.distanceBox}>
              <p>Distancia desde tu ubicación actual:</p>
              <div className={LocalEnxiladosCSS.distanceNumbers}>
                <h1>{shortestDistance ?? 0}</h1>
                <h3>km</h3>
              </div>
            </div>
          </Col> */}
          {/* -- Address Box */}
          <Col>
            <div className={LocalEnxiladosCSS.addressBox}>
              <p>Dirección:</p>
              <h3 className="mt-2">
              Blvd. Solidaridad 547-A, entre Ébanos y Olmos, Fuentes del Mezquital, 83240 Hermosillo, Son.
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="mt-2 gx-2">
          {/* -- Horarios Box */}
          <Col sm={6} md={6} lg={8}>
            <div className={LocalEnxiladosCSS.horariosBox}>
              <p>Horarios:</p>
              <div className={LocalEnxiladosCSS.horariosContent}>
                <div className={LocalEnxiladosCSS.horariosRow}>
                  <h3>Lunes a Viernes</h3>
                  <h4>12:00 pm - 7:30 pm</h4>
                </div>
                <div className={LocalEnxiladosCSS.horariosRow}>
                  <h3>Domingo</h3>
                  <h4>cerrado</h4>
                </div>
              </div>
            </div>
          </Col>

          {/* Maps : External Link Btn's */}
          <Col sm={6} md={6} lg={4}>
            <div className={LocalEnxiladosCSS.externalLinks}>
              <PhoneBtn url={"6623561894"}/>
              <span></span>
              <InstagramBtn url={"https://www.instagram.com/_enxilados/"}/>
              <span></span>
              <WebsiteBtn url={"https://enxilados.com.mx/"}/>
            </div>
          </Col>
        </Row>

        {/* Contact Info : External Link Btn's */}
        <Row className="gx-0 mt-2">
          <div className={LocalEnxiladosCSS.externalLinksTwo}>
            <Col>
              <OpenGoogleMaps url={"https://maps.app.goo.gl/F2Qvt9A9JmnXU8yW9"}/>
            </Col>
            <separator></separator>
            <Col>
              <OpenAppleMaps url={"https://maps.apple.com/?address=Boulevard%20Solidaridad%20547,%20Fuentes%20del%20Mezquital,%2083240%20Hermosillo,%20Son.,%20Mexico&auid=5436164018390643142&ll=29.075098,-110.979549&lsp=9902&q=ENXILADOS"}/>
            </Col>
          </div>
        </Row>

        {/* Ver otros puntos" de venta Btn */}
        <Row className="mt-5 mb-5">
          <Col></Col>
          <Col sm={9} md={7}>
            <PuntosDeVentaBtn />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}