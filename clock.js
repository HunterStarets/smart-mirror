showTime();
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  m = m < 10 ? "0" + m : m;
  h = h > 12 ? h - 12 : h;
  var time = h + ":" + m;

  document.getElementById("clock").innerText = time;
  setTimeout(showTime, 1000);
}
