
"use client";

import ResultTopContent from "../components/resultTopContent/ResultTopContent.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StoreResultCSS from "./StoreResult.module.css";
import React from "react";

import { PhoneBtn, InstagramBtn, WebsiteBtn, PuntosDeVentaBtn, OpenAppleMaps, OpenGoogleMaps } from "../components/openLinkButtons/ExternalLinkBtns.jsx";

export default function AbaceriaResult() {

  // Class variable created to have gx-0 + the CSS module class
  const cssModuleGxClass = `gx-0 ${StoreResultCSS.resultContainer}`;

  return (
    <div>
      <Container fluid className={cssModuleGxClass}>

        {/* ---- Top Row : ReturnBtn and Text ----- */}
        <ResultTopContent
          resultTitle={"Abaceria Concept Store"}
          imageURL={"https://res.cloudinary.com/dsx9xiq32/image/upload/v1709572919/FindMyEnxilados/79301479_2584679041638959_1646461054198218752_n_zmekdr.jpg"}
         />

        {/* ---- Information Row : Distance, external links, etc ----- */}
        <Row className="gx-2">
          {/* gx (Gutter) = "default spacing in Bootstrap Col's & Rows  */}
          {/* -- Distance Box */}
          <Col xs={4} sm={3} md={3} lg={2}>
            <div className={StoreResultCSS.distanceBox}>
              <p>Distancia desde tu ubicación actual:</p>
              <div className={StoreResultCSS.distanceNumbers}>
                <h1>164</h1>
                <h3>km</h3>
              </div>
            </div>
          </Col>
          {/* -- Address Box */}
          <Col xs={8} sm={9} md={9} lg={10}>
            <div className={StoreResultCSS.addressBox}>
              <p>Dirección:</p>
              <h3 className="mt-2">
                Blvd. Luis D.Colosio, Calz. de los Ángeles y, 83249, Hermosillo,
                Son.
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="mt-2 gx-2">
          {/* -- Horarios Box */}
          <Col sm={6} md={6} lg={8}>
            <div className={StoreResultCSS.horariosBox}>
              <p>Horarios:</p>
              <div className={StoreResultCSS.horariosContent}>
                <div className={StoreResultCSS.horariosRow}>
                  <h3>Lunes a Sabado</h3>
                  <h4>10:00 am - 7:30 pm</h4>
                </div>
                <div className={StoreResultCSS.horariosRow}>
                  <h3>Domingo</h3>
                  <h4>10:00 am - 7:30 pm</h4>
                </div>
              </div>
            </div>
          </Col>

          {/* Maps : External Link Btn's */}
          <Col sm={6} md={6} lg={4}>
            <div className={StoreResultCSS.externalLinks}>
              <PhoneBtn />
              <span></span>
              <InstagramBtn />
              <span></span>
              <WebsiteBtn />
            </div>
          </Col>
        </Row>

        {/* Contact Info : External Link Btn's */}
        <Row className="gx-0 mt-2">
          <div className={StoreResultCSS.externalLinksTwo}>
            <Col>
              <OpenGoogleMaps />
            </Col>
            <separator></separator>
            <Col>
              <OpenAppleMaps />
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