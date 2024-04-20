import { v4 as uuidv4 } from "uuid";

// ------ Ubicaciones de los locales de Enxilados ------
const ubicaciones = [
  {
    id: uuidv4(),
    title: "Local Enxilados",
    region: "Hermosillo",
    address: "Blvd Solidaridad 547-A , entre Ébanos y Olmos, Plaza Fuentes.",
    coordinates: [29.07516362932697, -110.97955261178708],
    phone: null,
    instagramURL: "https://www.instagram.com/_enxilados/",
    websiteURL: "https://enxilados.com.mx/",
    googleMapsURL: "https://maps.app.goo.gl/9TS6mDhL5K2ZVSGd7",
    appleMapsURL: null,
  },
  {
    id: uuidv4(),
    title: "Abaceria Food Concept Store",
    region: "Hermosillo, Sonora",
    address:
      "Blvd. Luis D.Colosio, Calz. de los Ángeles y, 83249 Hermosillo, Son.",
    coordinates: [29.085555594943695, -110.99634854602822],
    phone: "+526621109968",
    instagramURL: "https://www.instagram.com/abaceriamx/",
    websiteURL: "https://abaceria.mx/",
    googleMapsURL: "https://maps.app.goo.gl/WhEpFA727Su2r1ov6",
    appleMapsURL: null,
  },
  {
    id: uuidv4(),
    title: "RUUM Concept Store",
    region: "Ciudad Obregón",
    address: "C. Hidalgo 416, Norte, Urb. No. 5, 85000 Cdad. Obregón, Son.",
    coordinates: [27.501156556811985, -109.93219386220596],
    phone: null,
    instagramURL: "https://www.instagram.com/ruum.conceptstore/",
    websiteURL: "https://abaceria.mx/",
    googleMapsURL: "https://maps.app.goo.gl/2j7X8bQRVeMtrWvv5",
    appleMapsURL: null,
  },
  {
    id: uuidv4(),
    title: "La cubiella",
    region: "San Carlos, Guaymas",
    address: "Blvr. Gabriel Estrada Lote 1, 85506 Guaymas, Son.",
    coordinates: [27.950092214288443, -111.05286962966412],
    phone: null,
    instagramURL: "https://www.instagram.com/lacubiellamx/?hl=es-la",
    websiteURL: "https://lacubiella.com/",
    googleMapsURL: "https://maps.app.goo.gl/Ngq5BrkXw84We5ub6",
    appleMapsURL: null,
  },
  {
    id: uuidv4(),
    title: "Enxilados Website",
    region: "N/A",
    address: "N/A",
    coordinates: [0, 0],
    phone: null,
    instagramURL: "https://www.instagram.com/_enxilados/",
    websiteURL: "https://enxilados.com.mx/",
    googleMapsURL: null,
    appleMapsURL: null,
  }
];

export default ubicaciones;
