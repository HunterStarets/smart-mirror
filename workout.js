var day = d.getDay();
var workoutText = "";
var workoutHour = d.getHours();
var workoutHour = 6;
workoutCheck();

function workoutCheck() {
  day = d.getDay();
  workoutText = "";
  workoutHour = d.getHours();
  //workoutHour = 6;
  if ((day == 1 || day == 5) && (workoutHour == 5 || workoutHour == 6)) {
    workoutText = "";
  } else if ((day == 2 || day == 4) && (workoutHour == 5 || workoutHour == 6)) {
    workoutText = "";
  } else if (day == 3 && (workoutHour == 5 || workoutHour == 6)) {
    workoutIcon = document.querySelector(".workout-icon");
    workoutIcon.innerHTML = `<img src="icons/3w.png"/>`;
  } else {
    workout = "";
  }

  document.getElementById("SmartMirrorWorkout").textContent = workoutText;

  setTimeout(workoutCheck, 1000);
}
