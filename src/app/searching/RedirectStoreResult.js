'use client';

import getCurrentLocation from "./GetCurrentLocation";
import { nearestStore } from "./GetNearestStore";
import ubicaciones from "./ubicaciones";
import StartPageCSS from "../StartPage.module.css";
import { redirect } from 'next/navigation';

// ------ Function to handle click and render the correct result -------
async function redirectStoreResult() {

  try {
    // 1. Get the current location
    const userPosition = await getCurrentLocation();
    console.log("----- User Position:", userPosition);

    // 2. Get nearest distance
    const resultObject = await nearestStore(userPosition);

    // 3. Return result path
    const resultStoreName = resultObject.title;
    // Return the path to the store's page based on the store's title
    if (resultStoreName === "Local Enxilados") {
      return '/local-enxilados';
    } else if (resultStoreName === "Abaceria Concept Store") {
      return '/abaceria-concept-store';
    } else if (resultStoreName === "RUUM Concept Store") {
      return '/RUUM-concept-store';
    } else if (resultStoreName === "La cubiella") {
      return '/la-cubiella-sc';
    } else if (resultStoreName === "Enxilados Website") {
      return '/enxilados-website';
    } else {
      console.log("ERROR: resultStoreName is not equal to any store title");
    }
  } catch (error) {
    console.error("Error during redirect:", error);
  }

}

module.exports = redirectStoreResult;