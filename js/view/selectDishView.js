//Select Dish View Object constructor
var SelectDishView = function (container, model) {
	
	this.searchField = container.find("#searchField");
	this.searchBtn = container.find("#searchBtn");
	//TODO: Add variable(s) for dropdown menu
	
	this.show = function() {
	    container.show();	    
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
