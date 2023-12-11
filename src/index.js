const searchbar = document.querySelector(".searchbar");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function(e) {
  fetch("https://api.weatherapi.com/v1/search.json?key=857d876ab01b4f8a8b242735231112&q=" + searchbar.value, {mode: "cors"})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      let locationData = response[0].url;
      console.log(locationData);
    })
    .catch(function(error) {
      console.error("Error fetching data:", error);
    });
});