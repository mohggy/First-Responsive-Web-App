let fudgeHTML =
    "<ul>" +
    "<li> Recipe Name </li>" +
        "<ul>" + "<li> FUDGY CHOCOLATE BROWNIE COOKIES</>" + "</ul>" +
    "<li>Prep Time</li>" +
        "<ul>" + "<li> 10 MINS </li>" + "</ul>" +
    "<li>Cooking Time</li>" +
        "<ul>" + "<li> 12 MINS </li>" + "</ul>" +
    "<li>Ingredients</li>"+
        "<ul>" + "<li> 1/2 cup unsweetened cocoa powder </li>" +
        "<li> 1 cup white granulated sugar </li>" +
        "<li>1/2 cup melted butter</li>" + "<li>3 tablespoons vegetable oil</li>" + "<li>1 egg</li>" + "<li>2 teaspoons pure vanilla extract</li>" + "<li>1 1/3 cups all purpose flour (or plain flour) </li>" + "<li>1/2 teaspoon baking powder</li>" + "<li>1/2 teaspoon salt</li>" + "<li>1/3 cup semi sweet chocolate chips, (add more if desired)</li>" + "</ul>" +
    "<th>Instructions</th>"+
        "<ol>" +
            "<li>Preheat oven to 350°F (175°C). Line 2 cookie sheets or baking trays with parchment paper (baking paper).</li>" +
            "<li>In a medium-sized bowl, mix together the cocoa powder, white sugar, butter and vegetable oil. Beat in egg and vanilla until fully incorporated.</li>" +
            "<li>Add the flour, baking powder, and salt; stir the dry ingredients first before mixing them through the wet ingredients until a dough forms (do not over beat). Fold in the chocolate chips.</li>" +
            "<li>Scoop out 1-2 tablespoonful of dough with a cookie scoop (or small ice cream scoop), and place onto prepared baking sheets. Press them down as thick or thin as you want your cookies to come out. </li>" +
            "<li>Bake in hot preheated oven for 10-12 minutes. The cookies will come out soft from the oven but will harden up as they cool. (Be careful not to over bake as they will dry out.) </li>" +
            "<li>Allow to cool on the cookie sheet for 10 minutes before transferring to wire racks to cool.</li>" +
        "</ol>" +
    "</ul>";


module.exports = {
  getFudge: function() {
    console.log("called getFudge");
    return fudgeHTML;
  }
}




