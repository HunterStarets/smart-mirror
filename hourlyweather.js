var temp;
var description;
var time;
var temps = [];
var times = [];
var descriptions = [];
var icons = [];

getHourly();

function refreshWeather() {
  temps = [];
  times = [];
  descriptions = [];
  icons = [];
  setTimeout(getHourly, 1800000);
}

function getHourly() {
  var api =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=1&combinationMethod=aggregate&contentType=json&unitGroup=us&locationMode=single&key=CXFG6FLI4DMWUJHTRDVICTU72&dataElements=default&locations=Winston-Salem%2C%20NC%2C%20US";
  fetch(api)
    .then(function (response) {
      var data = response.json();
      return data;
    })
    .then(function (data) {
      fillTemp();
      function fillTemp() {
        for (var i = 0; i < 2; i++) {
          //temp array
          temp = data.location.values[i].temp;
          temp = Math.round(temp);
          temps.push(temp + "°");

          //time array
          time = data.location.values[i].datetimeStr;
          time = time.substring(11, time.length - 12);
          time = time > 12 ? time - 12 : time;
          times.push(time + "");

          //description array
          description = data.location.values[i].conditions;
          descriptions.push(description);

          if (description == "Overcast") {
            icon = "04d";
          } else if (description == "Partially cloudy") {
            icon = "02d";
          } else if (description == "Clear") {
            icon = "01d";
          } else {
            icon = "unknown";
            console.log(description);
          }
          icons.push(icon);
        }
        displayWeather();
      }
    })
    .catch(function (err) {
      console.log("error: " + err);
    });

  function displayWeather() {
    document.getElementById("temperature-value").textContent = temps[0];
    document.getElementById("temperature-description").textContent =
      descriptions[0];
    // document.getElementById("temperature-icon").src =
    // "icons/" + icons[0] + ".png";
    console.log(temps);
    refreshWeather();
  }
}
