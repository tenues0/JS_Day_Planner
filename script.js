function updateTime(){
    $("#currentDay").text(moment().format("dddd MMMM Do YYYY, hh:mm:ss A"))

}
setInterval(updateTime, 1000)

// Moment Current time 
var currentTime = moment();
// Returns current time to the nearest hour - 12:30 becomes 12:00
currentTime = currentTime.startOf("hour");
// Calculates the start of day + 8 to return 8 am
var beforeTime = moment().startOf('day').add(8, "hours");

console.log("currentTime ", currentTime.format('hh:mm A'))
console.log("currentTime ", currentTime.format('HH'))
console.log("currentTime", currentTime.valueOf())

// https://stackoverflow.com/questions/39157618/comparing-time-with-momentjs
// Need to use .valueOf() to compare times directly,
// otherwise I'll be comparing strings


// Time blocks
// 8 AM 
var time1 = beforeTime.add(0, "h");
// if-else statement that adds color block to text
if (currentTime.valueOf() > time1.valueOf()) {
    $(".text1").addClass("past");
} else if (currentTime.valueOf() === time1.valueOf()) {
    $(".text1").addClass("present");
} else if (currentTime.valueOf() < time1.valueOf()) {
    $(".text1").addClass("future");
}
// var time1 = beforeTime;
time1 = time1.format('hh:mm A');
// Populates time formula into html
$(".time1").text(time1);

var save1 = $(".save1")
var text1 = $(".text1")
save1.on('click', function(){
    localStorage.setItem('Stuff8am', text1.val())
})
$('.text1').val(localStorage.getItem('Stuff8am'))


// 9 AM 
var time2 = beforeTime.add(1, "h");
if (currentTime.valueOf() > time2.valueOf()) {
    $(".text2").addClass("past");
} else if (currentTime.valueOf() === time2.valueOf()) {
    $(".text2").addClass("present");
} else if (currentTime.valueOf() < time2.valueOf()) {
    $(".text2").addClass("future");
}
time2 = time2.format('hh:mm A');
$(".time2").text(time2);

var save2 = $(".save2")
var text2 = $(".text2")
save2.on('click', function(){
    localStorage.setItem('Stuff9am', text2.val())
})
$('.text2').val(localStorage.getItem('Stuff9am'))

// 10 AM 
var time3 = beforeTime.add(1, "h");
if (currentTime.valueOf() > time3.valueOf()) {
    $(".text3").addClass("past");
} else if (currentTime.valueOf() === time3.valueOf()) {
    $(".text3").addClass("present");
} else if (currentTime.valueOf() < time3.valueOf()) {
    $(".text3").addClass("future");
}
time3 = time3.format('hh:mm A');
$(".time3").text(time3);

var save3 = $(".save3")
var text3 = $(".text3")
save3.on('click', function(){
    localStorage.setItem('Stuff10am', text3.val())
})
$('.text3').val(localStorage.getItem('Stuff10am'))

// 11 AM 
var time4 = beforeTime.add(1, "h");
if (currentTime.valueOf() > time4.valueOf()) {
    $(".text4").addClass("past");
} else if (currentTime.valueOf() === time4.valueOf()) {
    $(".text4").addClass("present");
} else if (currentTime.valueOf() < time4.valueOf()) {
    $(".text4").addClass("future");
}
time4 = time4.format('hh:mm A');
$(".time4").text(time4);

var save4 = $(".save4")
var text4 = $(".text4")
save4.on('click', function(){
    localStorage.setItem('Stuff11am', text4.val())
})
$('.text4').val(localStorage.getItem('Stuff11am'))

// 12 PM 
var time5 = beforeTime.add(1, "h");
if (currentTime.valueOf() > time5.valueOf()) {
    $(".text5").addClass("past");
} else if (currentTime.valueOf() === time5.valueOf()) {
    $(".text5").addClass("present");
} else if (currentTime.valueOf() < time5.valueOf()) {
    $(".text5").addClass("future");
}
time5 = time5.format('hh:mm A');
$(".time5").text(time5)

var save5 = $(".save5")
var text5 = $(".text5")
save5.on('click', function(){
    localStorage.setItem('Stuff12pm', text5.val())
})
$('.text5').val(localStorage.getItem('Stuff12pm'))

// 1 PM 
var time6 = beforeTime.add(1, "h");
if (currentTime.valueOf() > time6.valueOf()) {
    $(".text6").addClass("past");
} else if (currentTime.valueOf() == time6.valueOf()) {
    $(".text6").addClass("present");
} else if (currentTime.valueOf() < time6.valueOf()) {
    $(".text6").addClass("future");
}
time6 = time6.format('hh:mm A');
$(".time6").text(time6)

var save6 = $(".save6")
var text6 = $(".text6")
save6.on('click', function(){
    localStorage.setItem('Stuff1pm', text6.val())
})
$('.text6').val(localStorage.getItem('Stuff1pm'))

// 2 PM 
var time7 = beforeTime.add(1, "h");
if (currentTime.valueOf() > time7.valueOf()) {
    $(".text7").addClass("past");
} else if (currentTime.valueOf() === time7.valueOf()) {
    $(".text7").addClass("present");
} else if (currentTime.valueOf() < time7.valueOf()) {
    $(".text7").addClass("future");
}
time7 = time7.format('hh:mm A');
$(".time7").text(time7);

var save7 = $(".save7")
var text7 = $(".text7")
save7.on('click', function(){
    localStorage.setItem('Stuff2pm', text7.val())
})
$('.text7').val(localStorage.getItem('Stuff2pm'))

// 3 PM 
var time8 = beforeTime.add(1, "h");
if (currentTime.valueOf() > time8.valueOf()) {
    $(".text8").addClass("past");
} else if (currentTime.valueOf() === time8.valueOf()) {
    $(".text8").addClass("present");
} else if (currentTime.valueOf() < time8.valueOf()) {
    $(".text8").addClass("future");
}
time8 = time8.format('hh:mm A');
$(".time8").text(time8);

var save8 = $(".save8")
var text8 = $(".text8")
save8.on('click', function(){
    localStorage.setItem('Stuff3pm', text8.val())
})
$('.text8').val(localStorage.getItem('Stuff3pm'))

// 4 PM 
var time9 = beforeTime.add(1, "h");
if (currentTime.valueOf() > time9.valueOf()) {
    $(".text9").addClass("past");
} else if (currentTime.valueOf() === time9.valueOf()) {
    $(".text9").addClass("present");
} else if (currentTime.valueOf() < time9.valueOf()) {
    $(".text9").addClass("future");
}
time9 = time9.format('hh:mm A');
$(".time9").text(time9);

var save9 = $(".save9")
var text9 = $(".text9")
save9.on('click', function(){
    localStorage.setItem('Stuff4pm', text9.val())
})
$('.text9').val(localStorage.getItem('Stuff4pm'))

// 5 PM 
var time10 = beforeTime.add(1, "h");
if (currentTime.valueOf() > time10.valueOf()) {
    $(".text10").addClass("past");
} else if (currentTime.valueOf() === time10.valueOf()) {
    $(".text10").addClass("present");
} else if (currentTime.valueOf() < time10.valueOf()) {
    $(".text10").addClass("future");
}
time10 = time10.format('hh:mm A');
$(".time10").text(time10);

var save10 = $(".save10")
var text10 = $(".text10")
save10.on('click', function(){
    localStorage.setItem('Stuff5pm', text10.val())
})
$('.text10').val(localStorage.getItem('Stuff5pm'))