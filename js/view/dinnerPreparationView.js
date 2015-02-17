//Dinner Preparation View Object constructor
var DinnerPreparationView = function (container, model) {
	
	model.addObserver(this);
	
	this.update = function(obj) {
	    var starter = model.getSelectedDish("starter");
	    var main = model.getSelectedDish("main dish");
	    var dessert = model.getSelectedDish("dessert");
	    
	    if (typeof starter != 'undefined') {	    
	        container.find("#starterImage").html("<img class='dishImages borderImage' src='images/" + starter.image + "'>");
	        container.find("#starterName").html(starter.name);
	        container.find("#starterDescription").html(starter.description);
	        container.find("#starterPreparation").html(starter.description);
	    } else {
	        container.find("#starter-container").hide();
	    }
	    
	    if (typeof main != 'undefined') {	    
	        container.find("#mainImage").html("<img class='dishImages borderImage' src='images/" + main.image + "'>");
	        container.find("#mainName").html(main.name);
	        container.find("#mainDescription").html(main.description);
	        container.find("#mainPreparation").html(main.description);
	    } else {
	        container.find("#main-container").hide();
	    }
	    
	    if (typeof dessert != 'undefined') {	    
	        container.find("#dessertImage").html("<img class='dishImages borderImage' src='images/" + dessert.image + "'>");
	        container.find("#dessertName").html(dessert.name);
	        container.find("#dessertDescription").html(dessert.description);
	        container.find("#dessertPreparation").html(dessert.description);
	    } else {
	        container.find("#dessert-container").hide();
	    }
	}
	
	this.show = function() {
	    container.show();
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
