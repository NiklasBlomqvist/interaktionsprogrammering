//Dish List View Object constructor
var DishListView = function (container, model) {

    model.addObserver(this);
	
	this.update = function(obj) {
		var type = model.getType();
		var filter = model.getFilter();
		var dishes = dishes = model.getAllDishes(type, filter);

		container.html("");
		
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
 
