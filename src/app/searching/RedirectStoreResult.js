'use client';

import getCurrentLocation from "./GetCurrentLocation";
import { nearestStore } from "./GetNearestStore";

// ------ Function to handle click and render the correct result -------
async function redirectStoreResult() {

  let userPosition;

  try {

    // 1. Get the current location
    userPosition = await getCurrentLocation()

    if (userPosition.latitude === 0 && userPosition.longitude === 0) {
      return "location-not-allowed";

    } else {

      // 2. Get nearest distance
      const resultObject = await nearestStore(userPosition);

      // 3. Return result path
      const resultStoreName = resultObject.title;
      // Return the path to the store's page based on the store's title
      if (resultStoreName === "Local Enxilados") {
        return '/local-enxilados';
      } else if (resultStoreName === "Abaceria Food Concept Store") {
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
    }

  } catch (error) {
    console.error("Error during redirect:", error);
  }
  
}

module.exports = redirectStoreResult;