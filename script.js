function updateTime(){
    $("#currentDay").text(moment().format("dddd MMMM Do YYYY, hh:mm:ss A"))

}
setInterval(updateTime, 1000)

// Moment Current time 
var currentTime = moment();
// Returns current time to the nearest hour - 12:30 becomes 12:00
currentTime = currentTime.startOf("hour");
// Calculates the start of day + 9 to return 9 am
var beforeTime = moment().startOf('day').add(9, "hours");

// Time blocks
// 9 AM 
var time1 = beforeTime.add(0, "h");
// var time1 = beforeTime;
time1 = time1.format('hh:mm A');
// Populates time formula into html
$(".block1").text(time1);