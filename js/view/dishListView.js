//Dish List View Object constructor
var DishListView = function (container, model) {
	
	this.update = function(type, filter) {
	    var dishes = model.getAllDishes(type, filter);
	    
	    for (var i = 0; i < dishes.length; i++) {
	        container.append("<div><table class='dishInTable'>" +
	                            "<tr><td><table class='dishImageAndText'>" +
	                                "<tr><td>" +
	                                    "<img class='dishImages' src='images/" + dishes[i].image + "'>" +
	                                "</td></tr>" +
	                                "<tr><td class='dishName'>" +
	                                    dishes[i].name +
	                                "</td></tr>" +
	                            "</table></td></tr>" +
	                            "<tr><td class='dishDescription'>" +
	                                dishes[i].description +
	                            "</td></tr>" +
	                        "</table></div>");
	    }
	}
	
	this.show = function() {
	    container.show();	    
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
