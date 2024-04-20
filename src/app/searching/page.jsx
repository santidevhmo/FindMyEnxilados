"use client";

import FindingStoreCSS from "./FindingStore.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import redirectStoreResult from "./RedirectStoreResult";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoadingPage() {

  // State to render loading page while nearest store is being searched
  const [isLoading, setIsLoading] = useState(false);
  // NextJS router : used to re-direct to store result
  const router = useRouter();

  async function startSearchingStore() {
    setIsLoading(true);
    // redirectPath is the URL path to open the nearest store's page
    const redirectPath = await redirectStoreResult();
    setIsLoading(false);
    // Change's the current URL path to the nearest store's path
    router.push(redirectPath);
  }

  // Start searching for the nearest store when the component is mounted
  useEffect(() => {
    startSearchingStore();
  }, []);

  return (
    // While isLoading == true : Render loading page while searching for the nearest store
    isLoading ? (
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
    ) : null
  );
}