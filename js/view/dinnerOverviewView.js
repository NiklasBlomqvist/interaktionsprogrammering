//Dinner Overview View Object constructor
var DinnerOverviewView = function (container, model) {
	
	this.update = function() {
	    var starter = model.getSelectedDish("starter");
	    var main = model.getSelectedDish("main dish");
	    var dessert = model.getSelectedDish("dessert");
	    
	    if (typeof starter != 'undefined') {	    
	        container.find("#chosen-starter-img").append("<img class='dishImages' src='images/" + starter.image + "'>");
	        container.find("#chosen-starter").append(starter.name);
	        container.find("#chosen-starter-price").append(model.getDishPrice(starter.id) + " SEK");
	    }
	    
	    if (typeof main != 'undefined') {	
	        container.find("#chosen-main-img").append("<img class='dishImages' src='images/" + starter.image + "'>");
	        container.find("#chosen-main").append(starter.name);
	        container.find("#chosen-main-price").append(model.getDishPrice(starter.id) + " SEK");
	    }
	    if (typeof dessert != 'undefined') {	
	        container.find("#chosen-dessert-img").append("<img class='dishImages' src='images/" + starter.image + "'>");
	        container.find("#chosen-dessert").append(starter.name);
	        container.find("#chosen-dessert-price").append(model.getDishPrice(starter.id) + " SEK");
	    }
	    
	    container.find("#total-price-td").append(model.getTotalMenuPrice() + " SEK");
	}
	
	this.show = function() {
	    container.show();	    
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
