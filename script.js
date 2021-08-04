var plannerText;
var plannerTime;
var saveBtn = $('.saveBtn');

var renderDate = function() {
    $('#currentDay').text('Today is ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
}
// a function to get current date and time and attach to id of currentDay
renderDate();

// a function to save input from textarea and the timeblock saved in
saveBtn.on("click", function()
{   console.log(this);
    plannerText = $(this).siblings('.description').val();
    plannerTime = $(this).parent().attr('id');

    // save in local storage
    localStorage.setItem(plannerTime, plannerText);
})

// get saved data from local storage for each hour
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));


function scheduler(){
// get current time
var currentTime = moment().hour();
// a function to change color for each timeblock
$(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    // adding classes to times so that the color changes based on past, present, or future hours
    if (timeBlock < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future"); 
    }
    else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})
}
scheduler();