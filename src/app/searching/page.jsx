"use client";

import FindingStoreCSS from "./FindingStore.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import redirectStoreResult from "./RedirectStoreResult";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { AllowLocation } from  "../components/openLinkButtons/ExternalLinkBtns.jsx";

export default function LoadingPage() {

  // State to render loading page while nearest store is being searched
  const [isLoading, setIsLoading] = useState(false);
  // State to see if the "Allow location" button should be shown
  const [changeLocationUI, setChangeLocationUI] = useState(false);

  // NextJS router : used to re-direct to store result
  const router = useRouter();

  async function startSearchingStore() {

    // Initialize states
    setIsLoading(true);
    setChangeLocationUI(false);

    // redirectPath is the URL path to open the nearest store's page
    const redirectPath = await redirectStoreResult();
    console.log("Redirect path is", redirectPath);

    if (redirectPath === "location-not-allowed") {
      setChangeLocationUI(true);
    } else {
      setIsLoading(false);
      // Change's the current URL path to the nearest store's path
      router.push(redirectPath);
    }

  }

  const hasStartedSearching = useRef(false);
  // Start searching for the nearest store when the component is mounted
  useEffect(() => {
    if (!hasStartedSearching.current) {
      hasStartedSearching.current = true;
      startSearchingStore();
    }
  }, []);

  return (
    // If the user allowed access to the location : Render loading page while searching for the nearest store
    isLoading && !changeLocationUI ? (
      <div className={FindingStoreCSS.loadingPageBody}>
        <Container className={FindingStoreCSS.contentContainer}>
          <Row>
            <Player
              src="https://lottie.host/774daf4a-bc7f-4d59-8858-73683f0f7d35/Ebt6A2DJez.json"
              className="player"
              loop
              autoplay
              speed={0.65}
              style={{ height: "200px" }}
            />
          </Row>
          <Row>
            <h2>
              Buscando el punto de venta mas cercano en base a tu ubicación actual
            </h2>
          </Row>
        </Container>
      </div>

    // If the user rejects the location permission, show the "Allow location" UI & button
    ) : changeLocationUI ? (
      <div className={FindingStoreCSS.loadingPageBody}>
        <Container className={FindingStoreCSS.contentContainer}>
          <Row>
            <Player
              src="https://lottie.host/774daf4a-bc7f-4d59-8858-73683f0f7d35/Ebt6A2DJez.json"
              className="player"
              loop
              autoplay
              speed={0.65}
              style={{ height: "200px" }}
            />
          </Row>
          <Row>
            <h2>
              Para encontrar el punto de venta más cercano, por favor activa la ubicación en tu dispositivo
            </h2>
          </Row>
          <Row>
            <AllowLocation onAllowLocationClick={() => router.push("/")}/>
          </Row>
        </Container>
      </div>
    ) : null
  );
}