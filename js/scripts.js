$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $(".click").click(function() {
    $("#show").toggle();
    $("#hide").toggle();
  });
});