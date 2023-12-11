import { getCurrentWeather, getLocation, getWeatherCondition } from "./weather";
import "./style.css";

const searchbar = document.querySelector(".searchbar");

// When the user presses the "enter" key, we send the value of the search bar to the Weather API's auto-complete API to get the correct location data
searchbar.addEventListener("keydown", function(e) {
  if (e.code == "Enter") {
    fetch("https://api.weatherapi.com/v1/search.json?key=857d876ab01b4f8a8b242735231112&q=" + searchbar.value, {mode: "cors"})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      let locationData = response[0].url;
      getCurrentWeather(locationData);
      getLocation(locationData);
      getWeatherCondition(locationData);
      searchbar.value = "";
    })
    .catch(function(error) {
      console.error("Error fetching location data:", error);
    });
  }
});