const age = document.getElementById("age");
function _calculateAge() {
  var dob = "20030114000000";
  var today = new Date();
  var year = Number(dob.substr(0, 4));
  var month = Number(dob.substr(4, 2)) - 1;
  var day = Number(dob.substr(6, 2));
  var hour = Number(dob.substr(8, 2));
  var minute = Number(dob.substr(10, 2));
  var second = Number(dob.substr(12, 2));
  var age_df = today.getFullYear() - year;
  var month_df = today.getMonth() - month;
  if (today.getDate() < day) {
    var day_df = today.getDate();
    month_df++;
  } else {
    var day_df = today.getDate() - day;
  }
  var hour_df = today.getHours() - hour;
  var minute_df = today.getMinutes() - minute;
  var second_df = today.getSeconds() - second;

  month_df = month_df < 10 ? "0" + month_df : month_df;
  day_df = day_df < 10 ? "0" + day_df : day_df;
  hour_df = hour_df < 10 ? "0" + hour_df : hour_df;
  minute_df = minute_df < 10 ? "0" + minute_df : minute_df;
  second_df = second_df < 10 ? "0" + second_df : second_df;

  age.innerHTML = `${age_df}<sup>.${month_df}${day_df}${hour_df}${minute_df}${second_df}</sup>`;
  let t = setTimeout(function () {
    _calculateAge();
  }, 1000);
}

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss;

  document.getElementById("clock").innerText = "Time: " + time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();
_calculateAge();
