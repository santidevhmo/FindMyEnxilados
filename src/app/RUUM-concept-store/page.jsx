
"use client";

import React, { useState, useEffect } from 'react';
import ResultTopContent from "../components/resultTopContent/ResultTopContent.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RUUMCSS from "./RUUM.module.css";

import { PhoneBtn, InstagramBtn, WebsiteBtn, PuntosDeVentaBtn, OpenAppleMaps, OpenGoogleMaps } from "../components/openLinkButtons/ExternalLinkBtns.jsx";

export default function AbaceriaResult() {

  // Class variable created to have gx-0 + the CSS module class
  const cssModuleGxClass = `gx-0 ${RUUMCSS.resultContainer}`;

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 571);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 571);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

    <div>
      <Container fluid className={cssModuleGxClass}>
        <Row className="justify-content-center">
          {/* ---- Top Row : ReturnBtn and Text ----- */}
          <ResultTopContent
            resultTitle={"RUUM Concept Store"}
            imageURL={"https://res.cloudinary.com/dsx9xiq32/image/upload/v1714266111/FindMyEnxilados/305851091_589681265942770_3152190955502217172_n_aofvnk.jpg"}
            returnPath={"/"}
          />
        </Row>

        {/* ---- Information Row : Distance, external links, etc ----- */}
        <Row className="gx-2">
          {/* gx (Gutter) = "default spacing in Bootstrap Col's & Rows  */}
          {/* -- Distance Box */}
          {/* <Col xs={4} sm={3} md={3} lg={2}>
            <div className={RUUMCSS.distanceBox}>
              <p>Distancia desde tu ubicación actual:</p>
              <div className={RUUMCSS.distanceNumbers}>
                <h1>{shortestDistance ?? 0}</h1>
                <h3>km</h3>
              </div>
            </div>
          </Col> */}
          {/* -- Address Box */}
          <Col>
            <div className={RUUMCSS.addressBox}>
              <p>Dirección:</p>
              <h3 className="mt-2">
                C. Hidalgo 416, Norte, Urb. No. 5, 85000 Cdad. Obregón, Son.
              </h3>
            </div>
          </Col>
        </Row>

        <Row className="mt-2 gx-2">
          {/* -- Horarios Box -- */}
          <Col sm={6} md={6} lg={8}>
            <div className={RUUMCSS.horariosBox}>
              <p>Horarios:</p>
              <div className={RUUMCSS.horariosContent}>
                <div className={RUUMCSS.horariosRow}>
                  <h3>Lunes a Viernes</h3>
                  <h4>11:00 am - 2:00 pm</h4>
                  <h4>3:30 pm - 7:00 pm</h4>
                </div>
                <div className={RUUMCSS.horariosRow}>
                  <h3>Sábado</h3>
                  <h4>11:00 am - 3:30 pm</h4>
                </div>
              </div>
            </div>
          </Col>

          {isMobileView ? (
            <Col sm={6} md={6} lg={4}>

              <div className={RUUMCSS.externalLinks}>
                <PhoneBtn url={"6623561894"} />
                <span></span>
                <InstagramBtn url={"https://www.instagram.com/ruum.conceptstore/"} />
              </div>

              <div className={RUUMCSS.externalLinksTwo}>
                <Col>
                  <OpenGoogleMaps url={"https://maps.app.goo.gl/Jjt3nhPkDJy8UY19A"} />
                </Col>
                <separator></separator>
                <Col>
                  <OpenAppleMaps url={"https://maps.apple.com/?address=Calle%20Tlaxcala%20105,%20Centro,%2085000%20Ciudad%20Obreg%C3%B3n,%20Son.,%20Mexico&auid=5863341782153809644&ll=27.496213,-109.943339&lsp=9902&q=RUUM%20Concept%20Store"} />
                </Col>
              </div>

            </Col>
          ) : (
            // Contact Info : External Link Btn's
            <Col sm={6} md={6} lg={4}>

              <div className={RUUMCSS.externalLinks}>
                <PhoneBtn url={"6623561894"} />
                <span></span>
                <InstagramBtn url={"https://www.instagram.com/ruum.conceptstore/"} />
                <span></span>
                <OpenGoogleMaps url={"https://maps.app.goo.gl/Jjt3nhPkDJy8UY19A"} />
                <span></span>
                <OpenAppleMaps url={"https://maps.apple.com/?address=Calle%20Tlaxcala%20105,%20Centro,%2085000%20Ciudad%20Obreg%C3%B3n,%20Son.,%20Mexico&auid=5863341782153809644&ll=27.496213,-109.943339&lsp=9902&q=RUUM%20Concept%20Store"} />
              </div>

            </Col>
          )}
        </Row>

      { }
          {/* <Col sm={6} md={6} lg={4}>
            <div className={RUUMCSS.externalLinks}>
              <PhoneBtn url={"6623561894"}/>
              <span></span>
              <InstagramBtn url={"https://www.instagram.com/ruum.conceptstore/"}/>
            </div>
          </Col>
        </Row> */}

        {/* Contact Info : External Link Btn's */}
        {/* <Row className="gx-0 mt-2">
          <div className={RUUMCSS.externalLinksTwo}>
            <Col>
              <OpenGoogleMaps url={"https://maps.app.goo.gl/Jjt3nhPkDJy8UY19A"}/>
            </Col>
            <separator></separator>
            <Col>
              <OpenAppleMaps url={"https://maps.apple.com/?address=Calle%20Tlaxcala%20105,%20Centro,%2085000%20Ciudad%20Obreg%C3%B3n,%20Son.,%20Mexico&auid=5863341782153809644&ll=27.496213,-109.943339&lsp=9902&q=RUUM%20Concept%20Store"}/>
            </Col>
          </div>
        </Row> */}

          {/* {isMobileView ? (
            <Col sm={6} md={6} lg={4}>
              <div className={RUUMCSS.externalLinks}>
                <PhoneBtn url={"6623561894"} />
                <span></span>
                <InstagramBtn url={"https://www.instagram.com/ruum.conceptstore/"} />
                <span></span>
                <OpenGoogleMaps url={"https://maps.app.goo.gl/Jjt3nhPkDJy8UY19A"} />
                <span></span>
                <OpenAppleMaps url={"https://maps.apple.com/?address=Calle%20Tlaxcala%20105,%20Centro,%2085000%20Ciudad%20Obreg%C3%B3n,%20Son.,%20Mexico&auid=5863341782153809644&ll=27.496213,-109.943339&lsp=9902&q=RUUM%20Concept%20Store"} />
              </div>
            </Col>
          ) : (
            // Contact Info : External Link Btn's
            <div className={RUUMCSS.externalLinks}>
              <PhoneBtn url={"6623561894"} />
              <span></span>
              <InstagramBtn url={"https://www.instagram.com/ruum.conceptstore/"} />
              <span></span>
              <OpenGoogleMaps url={"https://maps.app.goo.gl/Jjt3nhPkDJy8UY19A"} />
              <span></span>
              <OpenAppleMaps url={"https://maps.apple.com/?address=Calle%20Tlaxcala%20105,%20Centro,%2085000%20Ciudad%20Obreg%C3%B3n,%20Son.,%20Mexico&auid=5863341782153809644&ll=27.496213,-109.943339&lsp=9902&q=RUUM%20Concept%20Store"} />
            </div>
          )} */}
        {/* </Row> */}

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