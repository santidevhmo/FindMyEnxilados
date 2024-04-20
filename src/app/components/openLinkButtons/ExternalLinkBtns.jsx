import "./ExternalLinkBtns.css";

const instagramIcon = "/assets/icons/instagramIcon.svg";
const websiteIcon = "/assets/icons/websiteIcon.svg";
const phoneIcon = "/assets/icons/phoneIcon.svg";
const externalLinkIcon = "/assets/icons/externalLinkIcon.svg";
const returnArrow = "/assets/icons/returnArrow.svg";
import StartPageCSS from "../../StartPage.module.css"

function ReturnBtn() {

  return (
    <button className="returnBtn">
      <img src={returnArrow} alt="" />
    </button>
  );
}

function InstagramBtn() {
  return (
    <button
      className="externalLinkBtn"
      id="instagram"
      onClick={() =>
        (window.location.href = "https://www.instagram.com/_enxilados/")
      }
    >
      <p>Ver nuestro instagram</p>
      <span></span>
      <img src={instagramIcon} alt="instagramIcon" />
    </button>
  );
}

function WebsiteBtn() {
  return (
    <button
      className="externalLinkBtn"
      id="website"
      onClick={() => (window.location.href = "https://enxilados.com.mx/")}
    >
      <p>Ver pagina web</p>
      <span></span>
      <img src={websiteIcon} alt="websiteIcon" />
    </button>
  );
}

function PhoneBtn() {
  return (
    <button
      className="externalLinkBtn"
      id="phone"
      onClick={() => (window.location.href = "tel:+526623561894")}
    >
      <p>Contáctanos por telefono</p>
      <span></span>
      <img src={phoneIcon} alt="phoneIcon" />
    </button>
  );
}

function PhysicalLocationBtn() {
  return (
    <button
      className="externalLinkBtn"
      id="location"
      onClick={() =>
        (window.location.href = "https://maps.app.goo.gl/9TS6mDhL5K2ZVSGd7")
      }
    >
      <p>Conoce nuestra tienda física</p>
      <span></span>
      <img src={externalLinkIcon} alt="externalLinkIcon" />
    </button>
  );
}

function OpenGoogleMaps() {
  return (
    <button
      className="externalLinkBtn"
      id="maps"
      onClick={() =>
        (window.location.href = "https://maps.app.goo.gl/9TS6mDhL5K2ZVSGd7")
      }
    >
      <p>Abrir en Google Maps</p>
      <span></span>
      <img src={externalLinkIcon} alt="externalLinkIcon" />
    </button>
  );
}

function OpenAppleMaps() {
  return (
    <button
      className="externalLinkBtn"
      id="maps"
      onClick={() =>
        (window.location.href =
          "https://maps.apple.com/?ll=20.607697,-105.234355")
      }
    >
      <p>Abrir en Apple Maps</p>
      <span></span>
      <img src={externalLinkIcon} alt="externalLinkIcon" />
    </button>
  );
}

function PuntosDeVentaBtn() {
  return (
    <button
      className="externalLinkBtn"
      id="puntosDeVenta"
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


export {
  InstagramBtn,
  WebsiteBtn,
  PhoneBtn,
  PhysicalLocationBtn,
  OpenGoogleMaps,
  OpenAppleMaps,
  PuntosDeVentaBtn,
  ReturnBtn,
  NearestEnxilados
};
