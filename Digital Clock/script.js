var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
var date = setInterval(function time() {
  var date_now = new Date();
  var dateformmat = new Intl.DateTimeFormat("pt-BR").format(date_now);
  var dateF = dateformmat.split("/");
  var d = ("00" + dateF[0]).slice(-2);
  var m = ("00" + dateF[1]).slice(-2);
  var y = dateF[2];
  day.textContent = d;
  month.textContent = m;
  year.textContent = y;
}, 1000);

var clock = setInterval(function time() {
  var date_now = new Date();
  var hr = date_now.getHours();
  var min = date_now.getMinutes();
  var sec = date_now.getSeconds();

  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  hour.textContent = hr;
  minute.textContent = min;
  seconds.textContent = sec;
}, 1000);
