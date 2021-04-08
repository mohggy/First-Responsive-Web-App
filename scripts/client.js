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
                  "</ul>";
                  if (data[i].recipeName == "Super-Chunk White Chocolate Macadamia Nut Cookies") {
                    list += "<img src='/images/macademia.jpeg\' alt='m1' class='recipeImg'>"
                  } else if (data[i].recipeName == "White Chocolate Macadamia Nut Cookies") {
                    list += "<img src='/images/macademia-recipe-2.jpeg\' alt='m2' class='recipeImg'>"
                  } else if (data[i].recipeName == "White Chocolate Macadamia Nuts Cookies") {
                    list += "<img src='/images/macademia-recipe-3.jpeg\' alt='m3' class='recipeImg'>"
                  } else if (data[i].recipeName == "White Chocolate Macadamia Cookies") {
                    list += "<img src='/images/macademia-recipe-4.jpeg\' alt='m4' class='recipeImg'>"
                  } else if (data[i].recipeName == "Thick & Chewy White Chocolate Chip Macadamia Nut Cookies") {
                    list += "<img src='/images/macademia-recipe-5.jpeg\' alt='m5' class='recipeImg'>"
                  }
                  list+= "<li>Prep Time</li>" + 
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
                  list += "</ol>" + "</ul>" + "<br/>" + "<br/>" + "<hr>" + "<br/>" + "<ul>";   
        } 

        div.html(list);
        $(".recipe-title").text("Macademia Cookie Recipes");
      }
    })
  })

  $(".smores").click(function(e) {
    e.preventDefault();

    $.ajax({
      url: "/ajax-GET",
      dataType: "json",
      type: "GET",
      data: {format: "smores-JSON"},
      success: function(data) {
        console.log("smores JSON retrieved", data);
        var div = $("#recipes");
        let list = "<ul>";
        for (let i = 0; i < data.length; i++) {
          list += "<li>Recipe Name</li>" + 
                  "<ul>" + 
                      "<li>" + data[i].recipeName + "</li>" + 
                  "</ul>";
                  if (data[i].recipeName == "Smores Cookies") {
                    list += "<img src='/images/smores-recipe-1.jpeg\' alt='s1' class='recipeImg'>"
                  } else if (data[i].recipeName == "Smores Cookie") {
                    list += "<img src='/images/smores-recipe-2.jpeg\' alt='s2' class='recipeImg'>"
                  } else if (data[i].recipeName == "Chocolate Smores") {
                    list += "<img src='/images/smores-recipe-3.jpeg\' alt='s3' class='recipeImg'>"
                  } else if (data[i].recipeName == "chewy smores cookie") {
                    list += "<img src='/images/smores-recipe-4.jpg\' alt='s4' class='recipeImg'>"
                  } else if (data[i].recipeName == "S'mores Stuffed Cookies") {
                    list += "<img src='/images/smores-recipe-5.jpeg\' alt='s5' class='recipeImg'>"
                  }
                  list+= "<li>Prep Time</li>" + 
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
                  list += "</ol>" + "</ul>" + "<br/>" + "<br/>" + "<hr>" + "<br/>" + "<ul>";   
        } 

        div.html(list);
        $(".recipe-title").text("S'mores Cookie Recipes");
      }
    })
  })



});
