// global variables
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");

$(function () {
  // grabs current hour
  var currentHour = dayjs().hour();
  var timeBlock = $(".time-block");
  // function to render color for past, present, future time block 
  timeBlock.each(function () {
    // grabs the time block id
    var idVal = $(this).attr("id")
    // indicates past by comparing current hour to time block id
    if (idVal < currentHour) {
      $(this).children(".description").attr("class", "col col-md-10 description past")
    // indicates future by comparing current hour to time block id
  } else if (idVal > currentHour) {
      $(this).children(".description").attr("class", "col col-md-10 description future")
      // else indicates present
    } else {
      $(this).children(".description").attr("class", "col col-md-10 description present")
    }
  });

  // an event listener for the saveBtn
  saveBtn.on("click", function () {
    // saves text for event in local storage
    var description = $(this).siblings(".description").val().replace(hour)
    var hour = $(this).parent().attr("id")
    localStorage.setItem(hour, JSON.stringify(description))
  });

  // for loops applies event to all time blocks
  for (var i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
  };

  // displays current date and time on page
  currentDay.text(dayjs().format('ddd, MMMM DD, YYYY [at] hh:mm a'))
});


