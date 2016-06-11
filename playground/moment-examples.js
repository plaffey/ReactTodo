var moment = require("moment");

console.log(moment().format());

// UNIX epoch
// January 1st 1970 @ 12:00am -> 0

var now = moment();

// Number of seconds since Jan, 1st 1970 (UNIX Epoch)
console.log("Current timestamp", now.unix());

var timestamp = 1465680524;

var currentMoment = moment.unix(1465680524);
console.log("Current moment", currentMoment.format("MMM D, YYYY @ h:mm a"));

// January 3rd, 2016 @ 12:13 AM
console.log("Current moment", currentMoment.format("MMMM Do, YYYY @ h:mm A"));
