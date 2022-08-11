//todo : "the current day is displayed at the top of the calendar"
//! need to make sure the time and date is at the top - from stack overflow.https://stackoverflow.com/questions/34891241/how-to-call-a-javascript-from-html-using-an-id and https://momentjs.com/
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(todaysDate)
setInterval(() => {
 var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(todaysDate)
}, 1000);
    //var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');

//todo :  I scroll down I am presented with timeblocks for standard business hours
//! Goerge went over on andrews homewoork. repeat the input on the HTMl 8-9 times to call the functions into play. It will need BtnInput and input will need to save to lacal storage. grab icon from font awsome. must use jquery after DOM haas completely loaded.
$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var inputText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, inputText);
    })

    //todo : when page is refreshed everything that was input will then save to local storage 
//! need to look this up ??? how to get it initailize when pressed?


    $("#clearDay").on("click", function(){
        location.reload();
        localStorage.clear();

    })
    
    function timeTracker() {
        var currentTime = moment().format("H");  
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            //todo: when vewing the timeblocks for that day each timeblock is color coded to indicate whether it is in the past, present, or future

            //todo : I click into a timeblock - I can enter an event - I click the save button for that timeblock the text for that event is saved in local storage
//! when event happens it will then need to save to local storage by pressing a button
    console.log(currentTime, blockTime);

            if (blockTime < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            if (blockTime === currentTime) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
            if (blockTime > currentTime) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    };

    timeTracker()
})




