//Select Dish View Object constructor
var SelectDishView = function (container, model) {

	model.addObserver(this);
	
	this.searchField = container.find("#searchField");
	this.searchBtn = container.find("#searchBtn");
	this.dropdownOptions = [];
	this.dropdownOptions.push(container.find("#dropdownOption-starter"));
	this.dropdownOptions.push(container.find("#dropdownOption-main"));
	this.dropdownOptions.push(container.find("#dropdownOption-dessert"));
	
	this.update = function() {
		var defaultType = container.find("#dropdownDefault");
		var selectedType = model.getType();

		defaultType.html(selectedType);
	}
	
	this.show = function() {
	    container.show();	    
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
