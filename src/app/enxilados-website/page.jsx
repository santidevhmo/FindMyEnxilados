"use client";

import React, { useState, useEffect } from 'react';
import PaginaWebCSS from "./PaginaWeb.module.css";
import ResultTopContent from "../components/resultTopContent/ResultTopContent.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { WebsiteBtn, PuntosDeVentaBtn } from "../components/openLinkButtons/ExternalLinkBtns.jsx";

export default function AbaceriaConceptStore() {

    // Class variable created to have gx-0 + the CSS module class
    const cssModuleGxClass = `gx-0 ${PaginaWebCSS.resultContainer}`;

    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth < 400);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  

    return (
        <div>
            <Container fluid className={cssModuleGxClass}>

                {/* ---- Top Row : ReturnBtn and Text ----- */}
                <Row className="d-flex justify-content-center">
                    <ResultTopContent
                        resultTitle={"Nuestra Pagina Web"}
                        imageURL={"https://res.cloudinary.com/dsx9xiq32/image/upload/v1713592826/Screenshot_2024-02-06_at_11.01.21_a.m._hxtqx2.png"}
                        returnPath={"/"}
                    />
                </Row>

                {/* ---- Information Row : Distance, external links, etc ----- */}
                <Row className="gx-2">
                    {/* gx (Gutter) = "default spacing in Bootstrap Col's & Rows  */}
                    {/* -- Description Box */}
                    <Col lg={12}>
                        <div className={PaginaWebCSS.descriptionBox}>
                            <p>Descripción:</p>
                            <div className={PaginaWebCSS.descriptionText}>
                                <h3>
                                    Actualmente no se encuentra ningún lugar físico de venta de enxilados en tu región. Sin embargo, nuestra pagina web cuenta con envios nacionales e internacionales.
                                </h3>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Contact Info : External Link Btn's */}
                <Row className="gx-0 mt-2">
                    <div className={PaginaWebCSS.externalLinksTwo}>
                        <Col>
                            <WebsiteBtn url={"https://enxilados.com.mx/"} />
                        </Col>
                        {!isMobileView && <separator></separator>}
                        {!isMobileView && (
                            <Col>
                                <PuntosDeVentaBtn />
                            </Col>
                        )}
                    </div>
                    {isMobileView && (
                        <div className={PaginaWebCSS.externalLinksTwo}>
                            <PuntosDeVentaBtn />
                        </div>
                    )}
                </Row>

            </Container>
        </div>
    );
}