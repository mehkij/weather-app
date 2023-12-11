export { getCurrentWeather };

const p = document.querySelector(".current-weather");

// Function gets the current location from the user and appends it to the end of the URL to return the Weather API's current weather and location data
async function getCurrentWeather(location) {
  let current = await fetch("https://api.weatherapi.com/v1/current.json?key=857d876ab01b4f8a8b242735231112&q=" + location, {mode: "cors"});
  let response = await fetch(current.url);
  let weatherData = await response.json();
  console.log(weatherData);
  p.textContent = weatherData.current.temp_f + "F";
};