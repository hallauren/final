// This section of code is how we prepare our code
// so this it is prepared to react to user events.
$(document).ready(function() {
  $(".btn").on("click", addItem);
  // $(".link-delete").on("click", deleteItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

// This function prompts the user for a to-do item
// and then appends it to the existing list of items.
// It also updates the counter at the top of the screen.
function addItem() {
  // console.log("Yup!");
  // window.alert("Yup!")
  var text = window.prompt("New To-Do Item");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  // <li> Say hi to Luke <a href="#" class = link-delete">(Delete)
  //
  numItems = $("li").length;
  $(".total").html(numItems + " items");

  // Challenge: Differentiate between 1 item vs. more items
  // if(numItems == 1) {
  //   $(".total").html(numItems + " item");
  // }
  // else {
      if(numItems == 1) {
        $(".total").html(numItems + " item");
      }
      else {
          $(".total").html(numItems + " items");
  }
}

// This function deletes an item from the list.
// The "event" parameter holds information on which
// item the user wishes to remove.
function deleteItem(event) {
  console.info(event);
  // $(event.target).remove();
  $(event.target).parent().remove();
    // numItems = $("li").length;
    // $(".total").html(numItems + " items");

}

$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "In " + data.timezone + " the current temperature is " + data.currently.temperature +
    " degrees F but if feels like " + data.currently.apparentTemperature + " degrees F. Today was " +
    data.currently.summary + ". There is a " + data.currently.precipProbability*100 + "% chance of precipitation.";



    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
