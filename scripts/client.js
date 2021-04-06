$(function () {
  $(window).on("load", function () {
    $(".responsiveNav").css({ "display": "none" });
  })

  $("#hamMenu img").on("click", function () {
    if ($(".responsiveNav").css("display") == "none") {
      $(".responsiveNav").css({ "display": "block" });
    } else {
      $(".responsiveNav").css({ "display": "none" });
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

  $(".bday").click(function (e) {
    e.preventDefault();

    $.ajax({
      url: "/ajax-GET",
      dataType: "html",
      type: "GET",
      data: { format: "bday-HTML" },
      success: function (data) {
        console.log("bday HTML retrieved", data);
        $("#recipes").html(data);
        $(".recipe-title").text("Birthday Cookie Recipes");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#recipes").html(data).text("Error: File not found.\n\n" + jqXHR.statusText);
        console.log("ERROR", jqXHR, textStatus, errorThrown);
      }
    })

  })

  $(".macademia").click(function(e) {
    e.preventDefault();

    $.ajax({
      url: "/ajax-GET",
      dataType: "json",
      type: "GET",
      data: {format: "macademia-JSON"},
      success: function(data) {
        console.log("macademia JSON retrieved", data);
        var div = $("#recipes");
        let list = "<ul>";
        for (let i = 0; i < data.length; i++) {
          list += "<li>Recipe Name</li>" + 
                  "<ul>" + 
                      "<li>" + data[i].recipeName + "</li>" + 
                  "</ul>" +
                  "<li>Prep Time</li>" + 
                  "<ul>" + 
                      "<li>" + data[i].prepTime + "</li>" + 
                  "</ul>" +
                  "<li>Cooking Time</li>" + 
                  "<ul>" + 
                      "<li>" + data[i].cookTime + "</li>" + 
                  "</ul>" + 
                  "<li>Ingredients</li>" + 
                  "<ul>";
                  for (let j = 0; j < data[i].ingredients.length; j++) {
                    list += "<li>" + data[i].ingredients[j] + "</li>";
                  }
                  list += "</ul>" + "<li>Instructions</li>" + "<ol>";
                  for (let m = 0; m < data[i].instructions.length; m++) {

                    list += "<li>" + data[i].instructions[m] + "</li>"
                  } 
                  list += "</ol>";   
        } 
        list += "</ul>" + "<br/>" + "<br/>" + "<hr>" + "<br/>";

        div.html(list);
        $(".recipe-title").text("Macademia Cookie Recipes");
      }
    })
  })



});
