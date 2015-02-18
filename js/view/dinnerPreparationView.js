//Dinner Preparation View Object constructor
var DinnerPreparationView = function (container, model) {
	
	model.addObserver(this);
	
	this.update = function(obj) {
	    var starter = model.getSelectedDish("starter");
	    var main = model.getSelectedDish("main dish");
	    var dessert = model.getSelectedDish("dessert");
	    
	    if (typeof starter != 'undefined') {	    
	        container.find("#starter-container").html("<td id='starterImage'>" + 
	                    "<img class='dishImages borderImage' src='images/" + starter.image + "'>" +
				    "</td>" +
				    "<td class='preparationViewText'>" +
					    "<h3 id='starterName'>" + starter.name + "</h3>" +
					    "<p id='starterDescription'>" + starter.description +"</p>" +
				    "</td>" +
				    "<td class='preparationViewText'>" +
					    "<h3>Preparation</h3>" +
					    "<p id='starterPreparation'>" + starter.description + "</p>" +
				    "</td>");
	    } else {
	        container.find("#starter-container").html("");
	    }
	    
	    if (typeof main != 'undefined') {	    
	        container.find("#main-container").html("<td id='mainImage'>" + 
	                    "<img class='dishImages borderImage' src='images/" + main.image + "'>" +
				    "</td>" +
				    "<td class='preparationViewText'>" +
					    "<h3 id='mainName'>" + main.name + "</h3>" +
					    "<p id='mainDescription'>" + main.description +"</p>" +
				    "</td>" +
				    "<td class='preparationViewText'>" +
					    "<h3>Preparation</h3>" +
					    "<p id='mainPreparation'>" + main.description + "</p>" +
				    "</td>");
	    } else {
	        container.find("#main-container").html("");
	    }
	    
	    if (typeof dessert != 'undefined') {	    
	        container.find("#dessert-container").html("<td id='dessertImage'>" + 
	                    "<img class='dishImages borderImage' src='images/" + dessert.image + "'>" +
				    "</td>" +
				    "<td class='preparationViewText'>" +
					    "<h3 id='dessertName'>" + dessert.name + "</h3>" +
					    "<p id='dessertDescription'>" + dessert.description +"</p>" +
				    "</td>" +
				    "<td class='preparationViewText'>" +
					    "<h3>Preparation</h3>" +
					    "<p id='dessertPreparation'>" + dessert.description + "</p>" +
				    "</td>");
	    } else {
	        container.find("#dessert-container").html("");
	    }
	}
	
	this.show = function() {
	    container.show();
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
