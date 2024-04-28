
import ubicaciones from "./ubicaciones";

let shortestDistance = 0;

// ----- Función para obtener la ubicación más cercana -----
async function nearestStore(userPosition) {

  // Initialize variables to keep track of the nearest store and its distance
  let nearestStore;

  try {

    // 2 - Calculate the distance between the user's location and each store's coordinates
    ubicaciones.forEach((ubicacion) => {

      const storeLatitude = ubicacion.coordinates[0];
      const storeLongitude = ubicacion.coordinates[1];

      // 2.1 - Calculate distance using Haversine formula
      const distance =(() => {
        if (userPosition.latitude === 0 && userPosition.longitude === 0) { 
          return 0;
        } else {
          return calculateDistance(
            userPosition.latitude,
            userPosition.longitude,
            storeLatitude,
            storeLongitude,
          );
        }
      })();
      
      console.log("----- Distance:", distance);

      // 3 - If distance is 0 (the user rejected the geolocation), return 0 for error catching
      if (distance === 0) {
        return 0;
      }
      // 3 - If distance is more than 30 km, return website as the result
      else if (distance > 30) {
        nearestStore = ubicaciones[4];
        return nearestStore;
      }
      // 2.2 - Update nearest store if the distance is shorter
      else if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestStore = ubicacion;
      }

    });

    console.log("----- Nearest Store to return as ResultObjectTwo:", nearestStore)
    return nearestStore;

  } catch(error) {
    console.log("ERROR / CATCH");
    console.log(error);
    return null;
  }

}

// ----- Nearest Distance Calculation : Haversine Formula -----
/* "To find the nearest store to the user's location using their latitude and longitude, you can calculate the distance
between the user's location and each store's coordinates using the Haversine formula, which is commonly used to calculate distances between two points on a sphere."*/
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
    Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

module.exports = { nearestStore, shortestDistance };