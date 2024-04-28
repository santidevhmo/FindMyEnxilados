
export default function getCurrentLocation() {

  let userPosition;

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        userPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        console.log(`LATITUDE = ${userPosition.latitude}`);
        console.log(`LONGITUDE = ${userPosition.longitude}`);
        resolve(userPosition); // Resolve the promise with user's position
      },
      function(error) {
        console.log("Error getting user's location:", error);
        userPosition = { latitude: 0, longitude: 0 }; // Set default position to 0,0
        resolve(userPosition); // Return an error object instead of throwing an error
      });
  });
}
