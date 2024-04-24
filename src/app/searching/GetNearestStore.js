
import ubicaciones from "./ubicaciones";

let shortestDistance = 0;

// ----- Función para obtener la ubicación más cercana -----
async function nearestStore(userPosition) {

  // Initialize variables to keep track of the nearest store and its distance
  let nearestStore = null;

  try {

    // 2 - Calculate the distance between the user's location and each store's coordinates
    ubicaciones.forEach((ubicacion) => {
      const storeLatitude = ubicacion.coordinates[0];
      const storeLongitude = ubicacion.coordinates[1];

      // 2.1 - Calculate distance using Haversine formula
      const distance = calculateDistance(
        userPosition.latitude,
        userPosition.longitude,
        storeLatitude,
        storeLongitude,
      );

      // 3 - If distance is more than 30 km, return website as the result
      if (shortestDistance > 30) {
        console.log("----- Distance > 30 km");
        nearestStore = ubicaciones[4];
        return nearestStore;
      }
      // 2.2 - Update nearest store if the distance is shorter
      else if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestStore = ubicacion;
      }
    });

    return nearestStore;

  } catch {
    console.log("ERROR / CATCH");
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