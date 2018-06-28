var t = document.getElementById("currentTemp").innerHTML;
var s = document.getElementById("currentWind").innerHTML;
var windchill = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
document.getElementById("chill").innerHTML = windchill;