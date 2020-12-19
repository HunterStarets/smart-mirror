var artist = "";
var song = "";
var art = document.querySelector(".spotify-art");
var logo = document.querySelector(".spotify-logo");
var equalizer;
var artLink = "";
document.getElementById("spotify-label").textContent = "MUSIC";
displaySpotify();
getSpotify();
function getSpotify() {
  var api = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=HunterStarets&api_key=c2050bc240f54fc94b2593fbe594b9e5&format=json`;
  fetch(api)
    .then(function (response) {
      var data = response.json();
      return data;
    })

    .then(function (data) {
      song = data.recenttracks.track[0].name;
      artist = data.recenttracks.track[0].artist["#text"];
      artLink = data.recenttracks.track[0].image[2]["#text"];
      if (data.recenttracks.track[0]["@attr"] == undefined) {
        equalizer = "equalizer.gif";
      } else {
        equalizer = "equalizer.gif";
      }

      displaySpotify();
    })
    .catch(function (err) {
      getSpotify();
    });
}

function displaySpotify() {
  document.getElementById("spotify-song").textContent = song;
  document.getElementById("spotify-artist").textContent = artist;
  logo.innerHTML = `<img src="icons/${equalizer}"/>`;
  art.innerHTML = `<img src="${artLink}"/>`;
  setTimeout(getSpotify, 1000);
}
