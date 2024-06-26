"use client"; // Add this directive

import StartPageCSS from "./StartPage.module.css";
import BgRadar from "./components/backgroundRadar/BgRadar.js";
import { NearestEnxilados } from "./components/openLinkButtons/ExternalLinkBtns.jsx";
import Link from 'next/link';
import Head from 'next/head'; // Import Head component
import './globals.css'; 
import useNoScroll from './useNoScroll';
import ReactGA from 'react-ga4'; // Google Analytics Package
import React, { useEffect } from 'react';

export default function StartPage() {

  useNoScroll();
  ReactGA.initialize('G-M1SN6MVP6T');

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>

      <div className={StartPageCSS.mainContainer}>

        {/* Background Radar Component */}
        <div className={StartPageCSS.radarContainer}>
          <BgRadar />
        </div>

        {/* Main title container */}
        <div className={StartPageCSS.title}>
          <h1>find</h1>
          <h1>my</h1>
          <h1>enxilados</h1>
        </div>

        <Link href="/searching">
          <NearestEnxilados />
        </Link>

        <Link href="/quienes-somos">
          <button className={StartPageCSS.quienesSomosBtn}>Quienes somos</button>
        </Link>

        <h2 className={StartPageCSS.developedBy}>🧑‍💻 Developed & Designed by <a href="https://santiagdc.framer.website/"> Santiago Aguirre</a></h2>

      </div>
    </>
  );
}
