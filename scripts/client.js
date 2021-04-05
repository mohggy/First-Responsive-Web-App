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

  $(".fudge").click(function(e) {
    e.preventDefault();

    $.ajax({
        url: "/ajax-GET",
        dataType: "html",
        type: "GET",
        data: { format: "fudge-HTML"},
        success: function(data) {
            console.log("fudge HTML retrieved", data);
            $("#recipes").html(data);
            $(".recipe-title").text("Fudge Cookie Recipe");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#recipes").html(data).text("Error: File not found.\n\n" + jqXHR.statusText);
            console.log("ERROR", jqXHR, textStatus, errorThrown);
        }
        
    })
})

});
