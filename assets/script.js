

function keepTrackOfTime(){
    var time = moment().format("MMM Do, yyyy") +" "+ moment().format("hh:mm:ss");
    //$("#currentTime").append(time);
    $("#currentTime").text(time);
}




keepTrackOfTime();
var timerInterval =  setInterval(function() {
    keepTrackOfTime()
},1000);