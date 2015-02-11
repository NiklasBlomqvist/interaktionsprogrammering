//Dinner Overview View Object constructor
var DinnerOverviewView = function (container, model) {
	
	this.update = function() {
	    var starter = model.getSelectedDish("starter");
	    var main = model.getSelectedDish("main dish");
	    var dessert = model.getSelectedDish("dessert");
	    
	    if (typeof starter != 'undefined') {	    
	        container.find("#chosen-starter-img").html("<img class='dishImages' src='images/" + starter.image + "'>");
	        container.find("#chosen-starter").html(starter.name);
	        container.find("#chosen-starter-price").html(model.getDishPrice(starter.id) + " SEK");
	    }
	    
	    if (typeof main != 'undefined') {	
	        container.find("#chosen-main-img").html("<img class='dishImages' src='images/" + starter.image + "'>");
	        container.find("#chosen-main").html(starter.name);
	        container.find("#chosen-main-price").html(model.getDishPrice(starter.id) + " SEK");
	    }
	    if (typeof dessert != 'undefined') {	
	        container.find("#chosen-dessert-img").html("<img class='dishImages' src='images/" + starter.image + "'>");
	        container.find("#chosen-dessert").html(starter.name);
	        container.find("#chosen-dessert-price").html(model.getDishPrice(starter.id) + " SEK");
	    }
	    
	    container.find("#total-price-td").html(model.getTotalMenuPrice() + " SEK");
	}
	
	this.show = function() {
	    container.show();
	    this.update();
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
