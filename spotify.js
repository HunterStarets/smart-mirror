let artist;
let song;
let artLink;
let art;
let icon;

getSpotify();
function getSpotify() {
  let api; //removed api key for security reasons
  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })

    .then(function (data) {
      song = data.recenttracks.track[0].name;
      artist = data.recenttracks.track[0].artist["#text"];
      artLink = data.recenttracks.track[0].image[2]["#text"];

      if (data.recenttracks.track[0]["@attr"] == undefined) {
        icon = "spotify.png";
        document.getElementById("spotify-icon").src = "icons/" + icon;
      } else if (icon == "equalizer.gif") {
        icon = "equalizer.gif";
      } else {
        icon = "equalizer.gif";
        document.getElementById("spotify-icon").src = "icons/" + icon;
      }
      displaySpotify();
    })
    .catch(function (err) {
      console.log("spotify:" + err);
      getSpotify();
    });
}

function displaySpotify() {
  document.getElementById("spotify-song").textContent = song;
  document.getElementById("spotify-artist").textContent = artist;
  document.getElementById("spotify-art").src = artLink;
  setTimeout(getSpotify, 1000);
}
