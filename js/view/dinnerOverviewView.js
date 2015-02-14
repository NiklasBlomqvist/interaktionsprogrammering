//Dinner Overview View Object constructor
var DinnerOverviewView = function (container, model) {

	this.printBtn = container.find("#dinnerOverviewView-printButton");
	
	this.update = function() {
	    var starter = model.getSelectedDish("starter");
	    var main = model.getSelectedDish("main dish");
	    var dessert = model.getSelectedDish("dessert");
	    
	    if (typeof starter != 'undefined') {	    
	        container.find("#chosen-starter-img").html("<img class='dishImages' src='images/" + starter.image + "'>");
	        container.find("#chosen-starter").html(starter.name);
	        container.find("#chosen-starter-price").html(model.getDishPrice(starter.id) + " SEK");
	    } else {
	        container.find("#firstDishContainer").hide();
	    }
	    
	    if (typeof main != 'undefined') {	
	        container.find("#chosen-main-img").html("<img class='dishImages' src='images/" + main.image + "'>");
	        container.find("#chosen-main").html(main.name);
	        container.find("#chosen-main-price").html(model.getDishPrice(main.id) + " SEK");
	    } else {
	        container.find("#secondDishContainer").hide();
	    }
	    
	    if (typeof dessert != 'undefined') {	
	        container.find("#chosen-dessert-img").html("<img class='dishImages' src='images/" + dessert.image + "'>");
	        container.find("#chosen-dessert").html(dessert.name);
	        container.find("#chosen-dessert-price").html(model.getDishPrice(dessert.id) + " SEK");
	    } else {
	        container.find("#thirdDishContainer").hide();
	    }
	    
	    container.find("#total-price-td").html(model.getTotalMenuPrice() + " SEK");
	}
	
	this.show = function() {
	    container.show();
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
