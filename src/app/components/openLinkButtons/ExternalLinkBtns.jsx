"use client";

import "./ExternalLinkBtns.css";

const instagramIcon = "/assets/icons/instagramIcon.svg";
const websiteIcon = "/assets/icons/websiteIcon.svg";
const phoneIcon = "/assets/icons/phoneIcon.svg";
const externalLinkIcon = "/assets/icons/externalLinkIcon.svg";
const returnArrow = "/assets/icons/returnArrow.svg";
import StartPageCSS from "../../StartPage.module.css"
import Link from "next/link";
import { useRouter } from 'next/navigation';

function ReturnBtn(previousRoute) {

  const router = useRouter();

  return (
    <button
      className="returnBtn"
      onClick={() => router.push("/")}
    >
      <img src={returnArrow} alt="" />
    </button>
  );
}

function InstagramBtn( {url} ) {

  return (

    <Link
      className="externalLinkBtn"
      id="instagram"
      href={url}
      target="_blank"
      style={{ textDecorationColor: "transparent" }}
    >
      <p>Ver nuestro instagram</p>
      <span></span>
      <img src={instagramIcon} alt="instagramIcon" />
    </Link>

  );
}

function WebsiteBtn( {url} ) {

  return (
    <Link
      href={url}
      target="_blank"
      style={{ textDecorationColor: "transparent" }}
      className="externalLinkBtn"
      id="website"
    >
      <p>Ver pagina web</p>
      <span></span>
      <img src={websiteIcon} alt="websiteIcon" />
    </Link>

  );
}

function PhoneBtn( {phoneNumber} ) {

  return (

    <Link
      href={'tel:' + phoneNumber}
      target="_blank"
      style={{ textDecorationColor: "transparent" }}
      className="externalLinkBtn"
      id="phone"
    >
      <p>Contáctanos por telefono</p>
      <span></span>
      <img src={phoneIcon} alt="phoneIcon" />
    </Link>

  );
}

function PhysicalLocationBtn() {

  return (

    <Link
      href="https://maps.app.goo.gl/9TS6mDhL5K2ZVSGd7"
      target="_blank"
      style={{ textDecorationColor: "transparent" }}
      className="externalLinkBtn"
      id="location"
    >
      <p>Conoce nuestra tienda física</p>
      <span></span>
      <img src={externalLinkIcon} alt="externalLinkIcon" />

    </Link>

  );
}

function OpenGoogleMaps( {url} ) {

  return (

    <Link
      href={url}
      target="_blank"
      style={{ textDecorationColor: "transparent" }}
      className="externalLinkBtn"
      id="maps"
    >
      <p>Abrir en Google Maps</p>
      <span></span>
      <img src={externalLinkIcon} alt="externalLinkIcon" />
    </Link>

  );
}

function OpenAppleMaps( {url} ) {

  return (
    <Link
      href={url}
      target="_blank"
      style={{ textDecorationColor: "transparent" }}
      className="externalLinkBtn"
      id="maps"
    >
      <p>Abrir en Apple Maps</p>
      <span></span>
      <img src={externalLinkIcon} alt="externalLinkIcon" />
    </Link>
  );
}

function OpenInMaps( {url} ) {
  return (
    <Link
      href={url}
      target="_blank"
      style={{ textDecorationColor: "transparent" }}
      className="externalLinkBtn"
      id="maps"
    >
      <p>Abrir en Maps</p>
      <span></span>
      <img src={externalLinkIcon} alt="externalLinkIcon" />
    </Link>
  )
}

function PuntosDeVentaBtn() {

  const router = useRouter();

  return (
    <button
      className="externalLinkBtn"
      id="puntosDeVenta"
      onClick={() => router.push("/puntos-de-venta")}
    >
      <p>Ver otros puntos de venta</p>
      <span></span>
      <img src={returnArrow} alt="returnArrow" />
    </button>
  );
}

function NearestEnxilados() {

  return (
    <button
      className={StartPageCSS.encontrarTiendaBtn}
    >
        Encontrar la tienda mas cercana
    </button>
  );
}

function AllowLocation( { onAllowLocationClick } ) {

  return (
    <button
      className={StartPageCSS.encontrarTiendaBtn}
      onClick={onAllowLocationClick}
    >
        Volver al inicio
    </button>
  );
}

function RequestRegion() {
  
}



export {
  InstagramBtn,
  WebsiteBtn,
  PhoneBtn,
  PhysicalLocationBtn,
  OpenGoogleMaps,
  OpenAppleMaps,
  OpenInMaps,
  PuntosDeVentaBtn,
  ReturnBtn,
  NearestEnxilados,
  AllowLocation
};
