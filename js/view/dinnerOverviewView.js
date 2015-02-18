//Dinner Overview View Object constructor
var DinnerOverviewView = function (container, model) {

	model.addObserver(this);

	this.printBtn = container.find("#dinnerOverviewView-printButton");
	
	this.update = function(obj) {
	    var starter = model.getSelectedDish("starter");
	    var main = model.getSelectedDish("main dish");
	    var dessert = model.getSelectedDish("dessert");

	    if (typeof starter != 'undefined') {	    
	        container.find("#firstDishContainer").html("<tr>" +
							"<td id='chosen-starter-img' class='borderImageNoBottom'>" +
							    "<img class='dishImages' src='images/" + starter.image + "'>" +
							"</td>" +
						"</tr>" +
						"<tr>" +
							"<td id='chosen-starter' class='dishName borderImage'>" +
							starter.name +
							"</td>" +
						"</tr>" +
						"<tr>" +
							"<td id='chosen-starter-price' class='dishPrice'>" +
							    model.getDishPrice(starter.id) + " SEK" +
							"</td>" +
						"</tr>");
	    }
	    
	    if (typeof main != 'undefined') {	    
	        container.find("#secondDishContainer").html("<tr>" +
							"<td id='chosen-main-img' class='borderImageNoBottom'>" +
							    "<img class='dishImages' src='images/" + main.image + "'>" +
							"</td>" +
						"</tr>" +
						"<tr>" +
							"<td id='chosen-main' class='dishName borderImage'>" +
							main.name +
							"</td>" +
						"</tr>" +
						"<tr>" +
							"<td id='chosen-main-price' class='dishPrice'>" +
							    model.getDishPrice(main.id) + " SEK" +
							"</td>" +
						"</tr>");
	    }
	    
	    if (typeof dessert != 'undefined') {	    
	        container.find("#thirdDishContainer").html("<tr>" +
							"<td id='chosen-dessert-img' class='borderImageNoBottom'>" +
							    "<img class='dishImages' src='images/" + dessert.image + "'>" +
							"</td>" +
						"</tr>" +
						"<tr>" +
							"<td id='chosen-dessert' class='dishName borderImage'>" +
							dessert.name +
							"</td>" +
						"</tr>" +
						"<tr>" +
							"<td id='chosen-dessert-price' class='dishPrice'>" +
							    model.getDishPrice(dessert.id) + " SEK" +
							"</td>" +
						"</tr>");
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
 
