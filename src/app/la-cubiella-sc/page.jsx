
"use client";

import ResultTopContent from "../components/resultTopContent/ResultTopContent.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LaCubiellaCSS from "./LaCubiellaSC.module.css";
import React from "react";
import { shortestDistance } from "../searching/GetNearestStore";

import { PhoneBtn, InstagramBtn, WebsiteBtn, PuntosDeVentaBtn, OpenInMaps } from "../components/openLinkButtons/ExternalLinkBtns.jsx";

export default function LaCubiellaSC() {

  // Class variable created to have gx-0 + the CSS module class
  const cssModuleGxClass = `gx-0 ${LaCubiellaCSS.resultContainer}`;

  return (
    
    <div>
      <Container fluid className={cssModuleGxClass}>
        <Row className="justify-content-center">
          {/* ---- Top Row : ReturnBtn and Text ----- */}
          <ResultTopContent
            resultTitle={"La Cubiella SC"}
            imageURL={"https://res.cloudinary.com/dsx9xiq32/image/upload/v1713913525/FindMyEnxilados/416287768_787360740097716_3662239849348549440_n_cigmud.jpg"}
            returnPath="/"
          />
        </Row>

        {/* ---- Information Row : Distance, external links, etc ----- */}
        <Row className="gx-2">
          {/* gx (Gutter) = "default spacing in Bootstrap Col's & Rows  */}
          {/* -- Distance Box */}
          <Col xs={4} sm={3} md={3} lg={2}>
            <div className={LaCubiellaCSS.distanceBox}>
              <p>Distancia desde tu ubicación actual:</p>
              <div className={LaCubiellaCSS.distanceNumbers}>
                <h1>{shortestDistance ?? 0}</h1>
                <h3>km</h3>
              </div>
            </div>
          </Col>
          {/* -- Address Box */}
          <Col xs={8} sm={9} md={9} lg={10}>
            <div className={LaCubiellaCSS.addressBox}>
              <p>Dirección:</p>
              <h3 className="mt-2">
                Blvr. Gabriel Estrada Lote 1, 85506 Guaymas, Son.
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="mt-2 gx-2">
          {/* -- Horarios Box */}
          <Col sm={6} md={6} lg={8}>
            <div className={LaCubiellaCSS.horariosBox}>
              <p>Horarios:</p>
              <div className={LaCubiellaCSS.horariosContent}>
                <div className={LaCubiellaCSS.horariosRow}>
                  <h3>Domingo a Miercoles</h3>
                  <h4>10:00 am - 9:00 pm</h4>
                </div>
                <div className={LaCubiellaCSS.horariosRow}>
                  <h3>Jueves a Sabado</h3>
                  <h4>10:00 am - 10:00 pm</h4>
                </div>
              </div>
            </div>
          </Col>

          {/* Maps : External Link Btn's */}
          <Col sm={6} md={6} lg={4}>
            <div className={LaCubiellaCSS.externalLinks}>
              <PhoneBtn phoneNumber="6622146700" />
              <span></span>
              <InstagramBtn url={"https://www.instagram.com/lacubiellamx/"}/>
              <span></span>
              <WebsiteBtn url={"https://lacubiella.com/"}/>
            </div>
          </Col>
        </Row>

        {/* Contact Info : External Link Btn's */}
        <Row className="gx-0 mt-2">
          <div className={LaCubiellaCSS.externalLinksTwo}>
            <Col>
              <OpenInMaps url={"https://maps.app.goo.gl/NTViu44SvpNrNRzQA"}/>
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