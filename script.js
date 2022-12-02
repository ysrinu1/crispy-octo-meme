var now = dayjs().format("dddd, MMMM D, YYYY");
$("#currentDay").text(now);

var time08 = document.getElementById("08");
var time09 = document.getElementById("09");
var time10 = document.getElementById("10");
var time11 = document.getElementById("11");
var time12 = document.getElementById("12");
var time13 = document.getElementById("13");
var time14 = document.getElementById("14");
var time15 = document.getElementById("15");
var time16 = document.getElementById("16");

var times = [time08, time09, time10, time11, time12, time13, time14, time15, time16]

var timesId = [time08.id, time09.id, time10.id, time11.id, time12.id, time13.id, time14.id, time15.id, time16.id]

// The timeIndicator function adds styling to indicate which timeblocks are past, present, or future
function timeIndicator() {
    console.log("style the timeblocks for past, present, future");
    var currentHour = dayjs().format("HH");

    for (var i = 0; i < times.length; i++) {
        // add correct class, appending to current classes i/a
        if (timesId[i] < currentHour) {
            times[i].classList.add('past')
        } else if (timesId[i] > currentHour) {
            times[i].classList.add('future')
        } else {
            times[i].classList.add('present')
        }
    }
};

// This function saves and retrieves all events with local storage, once the document is loaded
$(document).ready(function() {
    $('.saveBtn').on('click', function(e) {
        e.preventDefault()
        // get the id of the parent
        var thisTime = $(this).parent().attr('id');
        // get the value of the sibling with a description id
        var thisEvent = $(this).siblings('.description').val();

        console.log("save time: " + thisTime + " and event: " + thisEvent + " to local storage");

        // send the time and event to local storage
        localStorage.setItem(thisTime, thisEvent);
    });

    for (var i = 0; i < timesId.length; i++) {
        // retrieve the time and event from local storage, populating the text of the corresponding time
        $(`#${timesId[i]}00 .description`).val(localStorage.getItem(`${timesId[i]}00`));
    }

});

function init() {
    console.log("initialize work_day_scheduler");
    timeIndicator()
};

init();
