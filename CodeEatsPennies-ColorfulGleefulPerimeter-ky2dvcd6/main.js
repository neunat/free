$(document).ready(function () {
  const $item = $("#search-item");
  const $resultInput = $("#results-input");
  $.ajaxSetup({
    cache: false,
    type: "GET",
    dataType: "jsonp",
    crossDomain: true,
    isLocal: true,
  });
  $item.keyup(function () {
    $("#result").html("");
    // set searchfield
    const searchField = $item.val();
    // set regular expression
    const expression = new RegExp(searchField, "i");
    $.getJSON("leadChannel.json", function (data) {
      $.each(data, function (key, value) {
        if (value.name.search(expression) != -1) {
          $("#result").append(
            '<li class="list-group-item link-class">' + value.name + "</li>"
          );
        }
      });
    });
  });

  $("#result").on("click", "li", function () {
    const clickedOnText = $(this).text().split("|");
    // add click text to second input
    $resultInput.val($resultInput.val() + $.trim(clickedOnText[0]) + ", ");
    $("#result").html("");
    $item.val("");
  });
});
