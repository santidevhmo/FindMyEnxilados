// Source : https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API

export default function getCurrentLocation() {

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        console.log(`LATITUDE = ${userPosition.latitude}`);
        console.log(`LONGITUDE = ${userPosition.longitude}`);

        resolve(userPosition); // Resolve the promise with user's position
      },
      (error) => {
        console.error("Error getting user's location:", error);
        reject(error); // Reject the promise with the error
      },
    );
  });

}
