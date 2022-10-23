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
  var dd = ("00" + dateF[0]).slice(-2);
  var mm = ("00" + dateF[1]).slice(-2);
  var yy = dateF[2];
  day.textContent = dd;
  month.textContent = mm;
  year.textContent = yy;
}, 1000);

var clock = setInterval(function time() {
  var date_now = new Date();
  var hr = ("00" + date_now.getHours()).slice(-2);
  var min = ("00" + date_now.getMinutes()).slice(-2);
  var sec = ("00" + date_now.getSeconds()).slice(-2);

  hour.textContent = hr;
  minute.textContent = min;
  seconds.textContent = sec;
}, 1000);
