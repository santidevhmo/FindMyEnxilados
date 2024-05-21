"use client";

import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReturnBtn } from '../components/openLinkButtons/ExternalLinkBtns.jsx';
import PuntosDeVentaCSS from './PuntosDeVenta.module.css';
import Link from "next/link";

export default function PuntosDeVenta(previousRoutePath) {

    return (
        <Container className={PuntosDeVentaCSS.mainContainer}>

            {/* Return Btn Row */}
            <Row>
                <Col className='d-flex align-items-start'>
                    <ReturnBtn previousRoute="/" />
                </Col>
                <Col></Col>
            </Row>

            {/* Main Title Row */}
            <Row className='d-flex align-items-start'>
                <Col>
                    <h1 className={PuntosDeVentaCSS.mainTitle}>Otros puntos de venta</h1>
                </Col>
                <Col></Col>
            </Row>

            {/* Content Rows */}
            {/* Hermosillo, Sonora */}
            <Row className='mt-4 mb-4'>
                <p>Hermosillo, Sonora</p>
                <PuntoDeVentaBtn 
                    openLinkURL="https://maps.app.goo.gl/H7exoCwN8RnGs5b9A"
                    sellingStoreText="Local Enxilados"
                />
                <PuntoDeVentaBtn 
                    openLinkURL="https://maps.app.goo.gl/TZxjXVHfAutG7f7z6"
                    sellingStoreText="abaceria concept store"
                />
            </Row>
            
            {/* Ciudad Obregon, Sonora */}
            <Row className='mt-4'>
                <p>Ciudad Obregon, Sonora</p>
                <PuntoDeVentaBtn 
                    openLinkURL="https://maps.app.goo.gl/1iRwt7rWtmf7ykCq9"
                    sellingStoreText="ruum concept store"
                />
            </Row>

            {/* San Carlos, Sonora */}
            <Row className='mt-4'>
                <p>San Carlos, Sonora</p>
                <PuntoDeVentaBtn 
                    openLinkURL="https://maps.app.goo.gl/KQbuxha2HeN1VXhz5"
                    sellingStoreText="la cubiella sc"
                />
            </Row>
            
        </Container>
    );

}

function PuntoDeVentaBtn({ openLinkURL, sellingStoreText }) {

    const externalLinkIcon = "/assets/icons/externalLinkIcon.svg";

    return (
        <Link
            href={openLinkURL}
            target="_blank"
            style={{ textDecorationColor: "transparent" }}
            className={PuntosDeVentaCSS.puntoDeVentaContainer}
        >
            <h2>{sellingStoreText}</h2>
            <img
                src={externalLinkIcon}
                alt="externalLinkIcon"
                className={PuntosDeVentaCSS.externalLink}
            />
        </Link>
    );
}

