//Dish Details View Object constructor
var DishDetailsView = function (container, model) {

    this.update = function(dish) {
        var guests = model.getNumberOfGuests();
    
        container.append("<div id='dishDetailsView-Overview'>" + 
            "<h3><b>" + dish.name + "</b></h3>" + 
            "<img id='dishDetailsView-Dish' src='images/" + dish.image + "'>" + 
            "<p>" + dish.description + "</p>" +
            "<button class='btn btn-danger'>" + "Back to Select Dish" + "</button>" + 
            "<h3><b>" + "Preparation" + "</b></h3>" + 
            "<p>" + dish.description + "</p>");
        
        var ingredientList = "<div id='dishDetailsView-Ingredients'>" + 
            "<table id='dishDetailsView-Ingredients-Table'>"  +
                "<tr><td class='noPaddingBottom' colspan='4'>" +  
                    "<h4>Ingredients For " + model.getNumberOfGuests() + " People</h4>" +       
                "</td></tr>" + 
                "<tr><td class='noPaddingBottom' colspan='4'>" +  
                    "<hr>" + 
                "</td></tr>";

                
        for(var i=0; i<dish.ingredients.length; i++) {
            ingredientList += "<tr>";
            ingredientList += "<td>" + dish.ingredients[i].quantity * guests + " " + dish.ingredients[i].unit + "</td>";
            ingredientList += "<td>" + dish.ingredients[i].name + "</td>";
            ingredientList += "<td>SEK</td>";
            ingredientList += "<td class='alignRight'>" + dish.ingredients[i].price * guests + "</td>";
            ingredientList += "</tr>"; 
        }

        ingredientList += "<tr><td class='noPaddingBottom' colspan='4'>" + "<hr>" + "</td></tr>"; 
        ingredientList += "<tr><td colspan='2'>" + "<button class='btn btn-danger'>" + "Confirm Dish" + "</button>" + "</td>";
        ingredientList += "<td>SEK</td><td>" + model.getDishPrice(dish.id) + "</td></tr>";

        
        ingredientList += "</table></div">
        container.append(ingredientList);

 

    }
   
	
	this.show = function() {
	    container.show();
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
