var dd = new Date();
var calendarDate;
var calendarSummary;
var calendarEvent;

var calendarElement = "calendar-event-1";
var calendarDisplay = "checking calendar...";
displayEvent();

var calendarDay = 1;

var calendarEvent1;
var calendarEvent2;
var calendarEvent3;

var calendarTime1;
var calendarTime2;
var calendarTime3;

var calendarIcon1 = document.querySelector("calendar-icon-1");
var calendarIcon2 = document.querySelector("calendar-icon-2");
var calendarIcon3 = document.querySelector("calendar-icon-3");

var calendarToday;

var calendarIconDate1 = "00";
var calendarIconDate2 = "00";
var calendarIconDate3 = "00";

var calendarStartTime;
var calendarEndTime;

var calendarToday = "";
dd.getFullYear() + "-" + (dd.getMonth() + 1) + "-" + dd.getDate();

var calendarTomorrow = "";
dd.getFullYear() + "-" + (dd.getMonth() + 1) + "-" + (dd.getDate() + 1);

displayEvent();
getCalendar();
refresh();

function getCalendar() {
  calendarApi =
    "https://www.googleapis.com/calendar/v3/calendars/hunter.starets@gmail.com/events?key=AIzaSyAFSs0rg2JqWNDpOGFgEslMbm9hMoXLfVs";
  fetch(calendarApi)
    .then(function (response) {
      var data = response.json();
      return data;
    })
    .then(function (data) {
      calendarTomorrow =
        dd.getFullYear() + "-" + (dd.getMonth() + 1) + "-" + (dd.getDate() + 1);
      calendarToday =
        dd.getFullYear() + "-" + (dd.getMonth() + 1) + "-" + dd.getDate();
      if (data.items[calendarDay] != undefined) {
        //get date and summary based off API
        calendarSummary = data.items[calendarDay].summary;
        calendarDate = data.items[calendarDay].start.dateTime;

        //Time
        calendarStartTimeHours = data.items[calendarDay].start.dateTime;
        calendarStartTimeMinutes = calendarStartTimeHours;
        calendarEndTimeHours = data.items[calendarDay].end.dateTime;
        calendarEndTimeMinutes = calendarEndTimeHours;

        if (calendarDate == undefined) {
          calendarDate = data.items[calendarDay].start.date;
          calendarEvent = calendarSummary;
        } else {
          //shorten the date
          calendarDate = calendarDate.substring(0, calendarDate.length - 15);
          //shorten the time
          // EndTime
          calendarEndTimeHours = calendarEndTimeHours.substring(11);
          calendarEndTimeHours = calendarEndTimeHours.substring(
            0,
            calendarEndTimeHours.length - 12
          );
          calendarEndTimeMinutes = calendarEndTimeMinutes.substring(14);
          calendarEndTimeMinutes = calendarEndTimeMinutes.substring(
            0,
            calendarEndTimeMinutes.length - 9
          );

          //Start Time
          calendarStartTimeHours = calendarStartTimeHours.substring(11);
          calendarStartTimeHours = calendarStartTimeHours.substring(
            0,
            calendarStartTimeHours.length - 12
          );
          calendarStartTimeMinutes = calendarStartTimeMinutes.substring(14);
          calendarStartTimeMinutes = calendarStartTimeMinutes.substring(
            0,
            calendarStartTimeMinutes.length - 9
          );

          //change to standard time
          calendarStartTime =
            calendarStartTimeHours > 12
              ? calendarStartTimeHours -
                12 +
                ":" +
                calendarStartTimeMinutes +
                " pm"
              : calendarStartTimeHours + ":" + calendarStartTimeMinutes + " am";
          calendarEndTime =
            calendarEndTimeHours > 12
              ? calendarEndTimeHours - 12 + ":" + calendarEndTimeMinutes + " pm"
              : calendarEndTimeHours + ":" + calendarEndTimeMinutes + " am";

          calendarIconDate = calendarDate;
          calendarIconDate = calendarIconDate.substring(8);

          //simplify

          //change work name
          if (calendarSummary == "Hotschedules: FOH General Front of House") {
            calendarSummary = "Chick-fil-A";
          }
          // final
          calendarEvent = calendarSummary;
        }
        checkDate();
      } else {
        finalDisplay();
      }
    })

    .catch(function (err) {
      console.log("calendar: " + err);
    });
}

// checkdate
function checkDate() {
  //checks to see if the events date matches todays date
  if (calendarDate == calendarToday) {
    priority = 1;
    adVerb = "Today";
    subCheckDate();
  } else if (calendarDate == calendarTomorrow) {
    priority = 2;
    adVerb = "Tomorrow";
    subCheckDate();

    //adding to the day variable to check the next event in the list
  } else {
    calendarDay = calendarDay + 1;
    getCalendar();
  }
}

function subCheckDate() {
  console.log(calendarEvent + " Event # " + calendarDay);
  if (calendarEvent1 == "") {
    priority1 = priority;
    calendarEvent1 = calendarEvent;
    calendarTime1 = adVerb + " at " + calendarStartTime;
    calendarIconDate1 = calendarIconDate + "c";

    console.log(calendarEvent + "=1");
    calendarDay = calendarDay + 1;
    getCalendar();

    // first slot was full, so now checking if the second slot is empty
  } else if (calendarEvent2 == "") {
    priority2 = priority;
    calendarEvent2 = calendarEvent;
    calendarTime2 = adVerb + " at " + calendarStartTime;
    calendarIconDate2 = calendarIconDate + "c";

    console.log(calendarEvent + "=2");
    calendarDay = calendarDay + 1;
    getCalendar();

    // the second slot was full as well, checking if the third slot is empty
  } else if (calendarEvent3 == "") {
    priority3 = priority;
    calendarEvent3 = calendarEvent;
    calendarTime3 = adVerb + " at " + calendarStartTime;
    calendarIconDate3 = calendarIconDate + "c";

    console.log(calendarEvent + "=3");
    finalDisplay();
  }
}

function refresh() {
  calendarDate = "";
  calendarSummary = "";
  calendarEvent = "";

  dd = new Date();

  calendarEvent1 = "";
  calendarEvent2 = "";
  calendarEvent3 = "";

  calendarIconDate1 = "00";
  calendarIconDate2 = "00";
  calendarIconDate3 = "00";

  calendarTime1 = "";
  calendarTime2 = "";
  calendarTime3 = "";

  calendarStartTime = "";
  calendarEndTime = "";

  calendarDay = 70;

  getCalendar();
  setTimeout(refresh, 60000);
}

function displayEvent() {
  document.getElementById(calendarElement).textContent = calendarDisplay;
}
function finalDisplay() {
  calendarElement = "calendar-event-1";
  calendarDisplay = calendarEvent1;
  displayEvent();

  calendarElement = "calendar-event-2";
  calendarDisplay = calendarEvent2;
  displayEvent();

  calendarElement = "calendar-event-3";
  calendarDisplay = calendarEvent3;
  displayEvent();

  calendarElement = "calendar-time-1";
  calendarDisplay = calendarTime1;
  displayEvent();

  calendarElement = "calendar-time-2";
  calendarDisplay = calendarTime2;
  displayEvent();

  calendarElement = "calendar-time-3";
  calendarDisplay = calendarTime3;
  displayEvent();

  document.getElementById("calendar-icon-1").src =
    "icons/calendar/" + calendarIconDate1 + ".png";
  document.getElementById("calendar-icon-2").src =
    "icons/calendar/" + calendarIconDate2 + ".png";
  document.getElementById("calendar-icon-3").src =
    "icons/calendar/" + calendarIconDate3 + ".png";
}
