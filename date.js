let d = "";
let day = "";
let month = "";
let date = "";
let dayNamed = "";
let monthNamed = "";

dateGet();

function dateGet() {
  d = new Date();
  day = d.getDay();
  month = d.getMonth();
  date = d.getDate();
  dayNamed = dayName(day);
  monthNamed = monthName(month);
  strings();
  dayName(day);
  monthName(month);
  showDate();
  setTimeout(dateGet, 2000);
}

// st and nd strings
function strings() {
  if (d.getDay == 1) {
    date = d.getDate() + "st";
  } else if (d.getDay == 2) {
    date = d.getDate() + "nd";
  } else if (d.getDay == 3) {
    date = d.getDate() + "rd";
  } else if (d.getDay == 21) {
    date = d.getDate() + "st";
  } else if (d.getDay == 22) {
    date = d.getDate() + "nd";
  } else if (d.getDay == 23) {
    date = d.getDate() + "rd";
  } else if (d.getDay == 31) {
    date = d.getDate() + "st";
  } else {
    date = d.getDate() + "th";
  }
}

//assigning Day names
function dayName(day) {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[day];
}
// assigning Month names
function monthName(month) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[month];
}

//final output
function showDate() {
  let finalString = dayNamed + ", " + monthNamed + " " + date;
  document.getElementById("date").innerText = finalString;
}
