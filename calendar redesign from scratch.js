// define variables
var d = new Date();

getCalendar();
// api function
function getCalendar() {
  today = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  tomorrow =
    d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate() + 1);

  api; //removed api key for security reasons
  fetch(api)
    .then(function (response) {
      var data = response.json();
      return data;
    })

    .then(function (data) {
      for (i = 2; data.items[i] != undefined; i++) {
        summary = data.items[i].summary;
        dateTime = data.items[i].start.dateTime;
        // gets the time

        if (dateTime != undefined) {
          h = dateTime;
          m = dateTime;

          h = h.substring(11, h.length - 12);

          m = m.substring(14, m.length - 9);

          time = h > 12 ? h - 12 + ":" + m + " pm" : h + ":" + m + " am";
          console.log(time + " " + i);
        } else {
          console.log(i);
        }
      }
    });
}
