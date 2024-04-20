"use client";

import PaginaWebCSS from "./PaginaWeb.module.css";
import ResultTopContent from "../components/resultTopContent/ResultTopContent.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PhoneBtn, InstagramBtn, WebsiteBtn, PuntosDeVentaBtn, OpenAppleMaps, OpenGoogleMaps } from "../components/openLinkButtons/ExternalLinkBtns.jsx";

export default function AbaceriaConceptStore() {

    // Class variable created to have gx-0 + the CSS module class
    const cssModuleGxClass = `gx-0 ${PaginaWebCSS.resultContainer}`;

    return (
        <div>
            <Container fluid className={cssModuleGxClass}>

                {/* ---- Top Row : ReturnBtn and Text ----- */}
                <Row className="d-flex justify-content-center">
                    <ResultTopContent 
                        resultTitle={"Nuestra Pagina Web"}
                        imageURL={"https://res.cloudinary.com/dsx9xiq32/image/upload/v1713592826/Screenshot_2024-02-06_at_11.01.21_a.m._hxtqx2.png"}
                    />
                </Row>

                {/* ---- Information Row : Distance, external links, etc ----- */}
                <Row className="gx-2">
                    {/* gx (Gutter) = "default spacing in Bootstrap Col's & Rows  */}
                    {/* -- Distance Box */}
                    <Col xs={4} sm={3} md={3} lg={2}>
                        <div className={PaginaWebCSS.distanceBox}>
                            <p>Distancia desde tu ubicación actual:</p>
                            <div className={PaginaWebCSS.distanceNumbers}>
                                <h1>164</h1>
                                <h3>km</h3>
                            </div>
                        </div>
                    </Col>
                    {/* -- Address Box */}
                    <Col xs={8} sm={9} md={9} lg={10}>
                        <div className={PaginaWebCSS.addressBox}>
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
                        <div className={PaginaWebCSS.horariosBox}>
                            <p>Horarios:</p>
                            <div className={PaginaWebCSS.horariosContent}>
                                <div className={PaginaWebCSS.horariosRow}>
                                    <h3>Lunes a Sabado</h3>
                                    <h4>10:00 am - 7:30 pm</h4>
                                </div>
                                <div className={PaginaWebCSS.horariosRow}>
                                    <h3>Domingo</h3>
                                    <h4>10:00 am - 7:30 pm</h4>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Maps : External Link Btn's */}
                    <Col sm={6} md={6} lg={4}>
                        <div className={PaginaWebCSS.externalLinks}>
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
                    <div className={PaginaWebCSS.externalLinksTwo}>
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