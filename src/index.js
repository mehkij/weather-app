import { getCurrentWeather } from "./weather";

const searchbar = document.querySelector(".searchbar");
const submit = document.querySelector(".submit");

// When the user presses the "submit" button, we send the value of the search bar to the Weather API's auto-complete API to get the correct location data
submit.addEventListener("click", function(e) {
  fetch("https://api.weatherapi.com/v1/search.json?key=857d876ab01b4f8a8b242735231112&q=" + searchbar.value, {mode: "cors"})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      let locationData = response[0].url;
      getCurrentWeather(locationData);
    })
    .catch(function(error) {
      console.error("Error fetching data:", error);
    });
});
