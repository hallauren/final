


$(document).ready(function() {
  $(".btn").on("click", addItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

function addItem() {

  var text = window.prompt("New Packing Item");

  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<abc><br>" + text + " " + delete_link + "</abc>");

  var numItems = $("abc").length;
  $(".total").html(numItems + " items");

      if(numItems == 1) {
        $(".total").html(numItems + " item");
      }
      else {
          $(".total").html(numItems + " items");
  }
}
function deleteItem(event) {
  console.info(event);
  $(event.target).parent().remove();

var numItems = $("abc").length-1;
$(".total").html(numItems + " item");

}
