var headerEl = $("#currentDay");
var saveBtnEl = $('.btn');

var events = {
    0:"",
    1:"",
    2:"",
    3:"",
    4:"",
    5:"",
    6:"",
    7:"",
    8:""
};

getDay();
getColors();

function getDay() {
    var currentDay = moment().format("dddd, MMMM Do");
    headerEl.text(currentDay);
}

function getColors() {
    var currentHour = parseInt(moment().format("HH"));
    console.log(currentHour);
    var allRows = $(".row");
    for (var i = 0; i < allRows.length; i++) {
        var rowHour = i + 9
        if (rowHour < currentHour) {
            // allRows[i].querySelector('.col-10').className = 'col-10 past';
            allRows[i].className = 'row past';
        } else if (rowHour ==  currentHour) {
            allRows[i].className = 'row present';
        } else {
            allRows[i].className = 'row future';
        }
    }
}

saveBtnEl.on('click', function (event) {
    // save the input text
    var index = event.currentTarget.getAttribute('data-index');
    console.log(index);
  });
  