export { getCurrentWeather, getLocation, getWeatherCondition };

const weatherElement = document.querySelector(".current-weather");
const locationElement = document.querySelector(".location");
const conditionElement = document.querySelector(".current-condition");

// Function gets the current location from the user and appends it to the end of the URL to return the Weather API's current weather and location data
async function getCurrentWeather(location) {
  try {
    let current = await fetch("https://api.weatherapi.com/v1/current.json?key=857d876ab01b4f8a8b242735231112&q=" + location, {mode: "cors"});
    let response = await fetch(current.url);
    let weatherData = await response.json();
    console.log(weatherData);
    weatherElement.textContent = weatherData.current.temp_f + "°F";
  }
  catch(error) {
    console.error("Error fetching weather data:", error);
  }
};

async function getLocation(location) {
  try {
    let current = await fetch("https://api.weatherapi.com/v1/current.json?key=857d876ab01b4f8a8b242735231112&q=" + location, {mode: "cors"});
    let response = await fetch(current.url);
    let weatherData = await response.json();
    console.log(weatherData);
    locationElement.textContent = weatherData.location.name;
  }
  catch(error) {
    console.error("Error fetching weather data (location):", error);
  }
};

async function getWeatherCondition(location) {
  try {
    let current = await fetch("https://api.weatherapi.com/v1/current.json?key=857d876ab01b4f8a8b242735231112&q=" + location, {mode: "cors"});
    let response = await fetch(current.url);
    let weatherData = await response.json();
    console.log(weatherData);
    conditionElement.textContent = weatherData.current.condition.text;
  }
  catch(error) {
    console.error("Error fetching weather data:", error);
  }
};