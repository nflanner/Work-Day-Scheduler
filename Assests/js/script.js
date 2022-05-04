headerEl = $("#currentDay");

getDay();

function getDay() {
    var currentDay = moment().format("dddd, MMMM Do");
    headerEl.text(currentDay);
}