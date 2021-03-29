$(function () {
  $(window). on ("load", function () {
    $(".responsiveNav").css({"display":"none"});
  })

  $("#hamMenu img").on("click", function() {
    if ($(".responsiveNav").css("display") == "none") {
      $(".responsiveNav").css({"display":"block"});
    } else {
      $(".responsiveNav").css({"display":"none"});
    }
  })

});
