// Checks if part of time is under 10 & adds a 0 in front
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Checks if day is 1, 2, or 3 and adds prefix, otherwise th
function checkDay(n) {
  switch (n) {
    case 1:
      n = n + "<sup>st</sup>";
      break;
    case 2:
      n = n + "<sup>nd</sup>";
      break;
    case 3:
      n = n + "<sup>rd</sup>";
      break;
    case 21:
      n = n + "<sup>st</sup>";
      break;
    case 22:
      n = n + "<sup>nd</sup>";
      break;
    case 23:
      n = n + "<sup>rd</sup>";
      break;
    case 31:
      n = n + "<sup>st</sup>";
      break;
    default:
      n = n + "<sup>th</sup>";
      break;
  }
  return n;
}

// Checks what time of the day it is & adjust moon opacity
function moonOpacity(n) {
  switch (n) {
    case 17:
      document.getElementById("moon-img").style.opacity = "0.1";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 6px white)";
      break;
    case 18:
      document.getElementById("moon-img").style.opacity = "0.2";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 8px white)";
      break;
    case 19:
      document.getElementById("moon-img").style.opacity = "0.4";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 10px white)";
      break;
    case 20:
      document.getElementById("moon-img").style.opacity = "0.6";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 12px white)";
      break;
    case 21:
      document.getElementById("moon-img").style.opacity = "0.7";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 14px white)";
      break;
    case 22:
      document.getElementById("moon-img").style.opacity = "0.8";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 16px white)";
      break;
    case 23:
      document.getElementById("moon-img").style.opacity = "0.9";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 18px white)";
      break;
    case 0:
      document.getElementById("moon-img").style.opacity = "1";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 20px white)";
      break;
    case 1:
      document.getElementById("moon-img").style.opacity = "0.9";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 18px white)";
      break;
    case 2:
      document.getElementById("moon-img").style.opacity = "0.8";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 16px white)";
      break;
    case 3:
      document.getElementById("moon-img").style.opacity = "0.7";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 14px white)";
      break;
    case 4:
      document.getElementById("moon-img").style.opacity = "0.6";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 12px white)";
      break;
    case 5:
      document.getElementById("moon-img").style.opacity = "0.4";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 10px white)";
      break;
    case 6:
      document.getElementById("moon-img").style.opacity = "0.2";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 8px white)";
      break;
    case 7:
      document.getElementById("moon-img").style.opacity = "0.1";
      document.getElementById("moon-img").style.filter = "drop-shadow(0px 0px 9px white)";
      break;
    default:
      document.getElementById("moon-img").style.opacity = "0";
      break;
  }
  return n;
}


// Function that displays current date
function date() {
  var date = new Date();
  // Gets todays full date
  var day = date.getDate();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var year = date.getFullYear();
  // Displays date
  document.getElementById("date").innerHTML = checkDay(day) + "\xa0" + months[date.getMonth()] + "<br>" + year;
}

// Run date function
date();

// Function that displays current time and a countdown
function time() {
  var date = new Date();

  // Get todays full time
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Checks if value of time is under 10, then possibly adds a "0"
  hour = checkTime(hour);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  // Displays current time
  document.getElementById("hour").innerHTML = moonOpacity(hour) + ":";
  document.getElementById("minutes").innerHTML = minutes + ":";
  document.getElementById("seconds").innerHTML = seconds;

  // Refreshes time once every second
  setTimeout(time, 1000);
}

// Runs time function
time();

// Anonymous function that gets triggered immediately
(function() {

  // Creates a new variable holding a timeline which loops endlessly, used to animate some clouds
  var timelineClouds = new TimelineMax({
    repeat: -1
  });

  // Creates a new variable holding a timeline which loops endlessly, used to animate some clouds
  var timelineClouds2 = new TimelineMax({
    repeat: -1
  });

  // Animates the first set of clouds to the x-position of 1599px over the time of 50 seconds
  timelineClouds.to("#clouds", 50, {
    marginLeft: 1599,
    ease: Power0.easeOut
  });

  //// Animates the second set of clouds to the x-position of 1599px over the time of 30 seconds
  timelineClouds2.to("#clouds2", 30, {
    marginLeft: 1599,
    ease: Power0.easeOut
  });
}());

// Anonymous function that gets triggered immediately
(function() {

  // Sets new variable for the current date
  var today = new Date();

  // The next three variables are used to correct the offset of the sun
  // Sets new variable that is converting the current hours to radial degress for the rotation of the sun
  var correctHours = today.getHours() * 15;
  // Sets new variable that is converting the current minutes to radial degress for the rotation of the sun
  var correctMinutes = today.getMinutes() * 0.25;
  // Sets new variable that is converting the current seconds to radial degress for the rotation of the sun
  var correctSeconds = today.getSeconds() * 0.00416;

  // Creates a new variable holding a new timeline
  var sunCorrect = new TimelineMax({
    repeat: 1
  });

  // Creates a new variable holding a new timeline, which loops endlessly
  var sunRotate = new TimelineMax({
    repeat: -1
  });

  // Sets the posisiton of the sun to the corrected value
  sunCorrect.set("#sunContainer", {
    rotation: correctHours + correctMinutes + correctSeconds
  });

  // Animates the sun to rotate a full circle in 86400 seconds which is a day
  sunRotate.to("#sunContainer", 86400, {
    ease: Power0.easeNone,
    rotation: 360
  });
}());

// (function() {
//
//   var today = new Date();
//   var hours = today.getHours();
//
//   var timelineClouds = new TimelineMax({
//     repeat: -1
//   });
//
//
//   var moonOpacity = new TimelineMax({
//     repeat: -1
//   });
//
//   if (hours > 17) {
//     moonOpacity.set("#moon-img", {
//       opacity: (hours - 17) / 6
//     })
//     moonOpacity.to("#moon-img", 10, {
//       opacity: 1
//     }).to("#moon-img", 21700, {
//       opacity: 0
//     });
//   } else {
//     moonOpacity.set("#moon-img", {
//       opacity: 1
//     })
//     moonOpacity.to("#moon-img", 21700, {
//       opacity: 0
//     });
//   }
// }());



console.log("Welcome to the console!");