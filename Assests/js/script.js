var headerEl = $("#currentDay");
var saveBtnEl = $('.saveBtn');

getDay();

function getDay() {
    var currentDay = moment().format("dddd, MMMM Do");
    headerEl.text(currentDay);
}

saveBtnEl.on('click', function (event) {
    // save the input text
    var index = event.currentTarget.getAttribute('data-index');
  });
  