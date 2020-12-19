var weather = {};
var kelvin = 273;
var proxy = "https://cors-anywhere.herokuapp.com/";
var nameCapitalized = "-";

weather.temperature = {
  unit: "f",
};

getWeather();

// GET WEATHER INFO
function getWeather() {
  var api = `https://api.openweathermap.org/data/2.5/weather?lat=36.146729&lon=-80.323853&appid=b8c52c7a7083d3e4a2a4405ab8edb56b`;
  fetch(api)
    .then(function (response) {
      var data = response.json();
      return data;
    })

    .then(function (data) {
      weatherTemperatureValue =
        Math.floor(((data.main.temp - kelvin) * 9) / 5 + 32) + "°";
      weatherDescription = data.weather[0].description;
      weatherIconId = data.weather[0].icon;
      weatherDescription =
        weatherDescription.charAt(0).toUpperCase() +
        weatherDescription.slice(1);
      console.log(weatherIconId);
      console.log(weatherDescription);
      console.log(weatherTemperatureValue);
      icon = "icons/" + weatherIconId + ".png";
      console.log(icon);
    })
    .then(function (refresh) {
      displayWeather();
    });
}

// DISPLAY WEATHER TO UI
function displayWeather() {
  document.getElementById("temperature-icon").src = icon;

  document.getElementById(
    "temperature-value"
  ).textContent = weatherTemperatureValue;

  document.getElementById(
    "temperature-description"
  ).textContent = weatherDescription;
}
