// get the current date
var myDate = new Date();

// get day of the week
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var daysOfWeek = myDate.getDate(); // returns 0-6
var daysOfWeekString = weekdays[daysOfWeek];// Saturday


var daysOfMonth = myDate.getDate();


var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = myDate.getMonth();
var monthString = months[month]


var fullYear = myDate.getFullYear(); // returns 2018


var fullDate = daysOfWeekString + ', ' + daysOfMonth + ' ' + monthString + ' ' + fullYear;


document.getElementById('currentdate').innerHTML = fullDate;
