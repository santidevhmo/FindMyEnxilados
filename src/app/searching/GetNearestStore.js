import ubicaciones from "./ubicaciones";

let shortestDistance = Infinity;

// ----- Función para obtener la ubicación más cercana -----
async function nearestStore(userPosition) {

  // Initialize variables to keep track of the nearest store and its distance
  let nearestStore;
  let distance;

  try {

    // 2 - Calculate the distance between the user's location and each store's coordinates
    ubicaciones.forEach((ubicacion) => {

      const storeLatitude = ubicacion.coordinates[0];
      const storeLongitude = ubicacion.coordinates[1];

      // 2.1 - Calculate distance using Haversine formula
      distance = (() => {
        // If both latitude and longitude are 0, skip this iteration
        if (storeLatitude === 0 && storeLongitude === 0) {
          return;
        } else if (userPosition.latitude === 0 && userPosition.longitude === 0) {
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

      if (distance === undefined || distance === 0) {
        return;
      }

      // 2.2 - Update nearest store if the distance is smaller than the shortestDistance
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestStore = ubicacion;
      }

    });

    // 3 - If distance is more than 10 km, return "Enxilados website" as a result
    if (shortestDistance > 10) {
      return ubicaciones[4];
    } else {

      console.log(`Nearest store object to return is ${JSON.stringify(nearestStore, null, 2)}`)
      console.log(`The shortest distance is ${shortestDistance} km`); // Print the shortest distance
      return nearestStore;

    }

  } catch (error) {
    console.log("ERROR / CATCH");
    console.log(error);
    return null;
  }

}

// ----- Nearest Distance Calculation : Haversine Formula -----
/* "To find the nearest store to the user's location using their latitude and longitude, you can calculate the distance
between the user's location and each store's coordinates using the Haversine formula, which is commonly used to calculate distances between two points on a sphere."*/
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon1 - lon2); // Fixed the order of longitude subtraction
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

module.exports = { nearestStore, shortestDistance };
