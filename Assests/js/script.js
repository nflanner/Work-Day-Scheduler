var headerEl = $("#currentDay");
var saveBtnEl = $('.btn');
var contentEls = document.getElementsByTagName('input');

var eventsLocal = {
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

// upon loading, set the date, row colors based off local time, and load locally-saved content
getDay();
getColors();
loadEventContent();

// this formats the date in the header
function getDay() {
    var currentDay = moment().format("dddd, MMMM Do");
    headerEl.text(currentDay);
}

// this sets all the row colors
function getColors() {
    var currentHour = parseInt(moment().format("HH"));
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

// this saves all event content to local storage
function saveEventContent() {
    localStorage.setItem("eventContent", JSON.stringify(eventsLocal));
}

// this loads in previously-saved event content from local storage
function loadEventContent() {
    var prevContent = JSON.parse(localStorage.getItem("eventContent"));
    var contentList = contentEls;
    for (var i = 0; i < Object.keys(eventsLocal).length; i++) {
        if (prevContent[i] != ""){
            contentList[i].value = prevContent[i];
            eventsLocal[i] = prevContent[i];
        } else {
            contentList[i].value = "";
            eventsLocal[i] = "";
        }
    }
}

// this is our event listener
saveBtnEl.on('click', function (event) {
    event.preventDefault();
    // save the input text
    var index = event.currentTarget.getAttribute('data-index');
    var eventContent = contentEls[index].value;
    eventsLocal[index] = eventContent;
    saveEventContent();
  });
  