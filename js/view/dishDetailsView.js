//Dish Details View Object constructor
var DishDetailsView = function (container, model) {

    this.update = function(dish) {
        container.append("<div id='dishDetailsView-Overview'>" + 
            " <h3><b> LASAGNE </b></h3>" + 
            "<img id='dishDetailsView-Dish' src='images/'" + "" + "'>" + 
        "</div>");

    }
   
	
	this.show = function() {
	    container.show();
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
