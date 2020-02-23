$("#toggle").click(function() {
  $("#header").toggleClass("open");
});
$("#nav li a").click(function() {
  $("#header").removeClass("open");
});
