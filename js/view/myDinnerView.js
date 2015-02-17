//My Dinner View Object constructor
var MyDinnerView = function (container, model) {

	model.addObserver(this);
    
	this.confirmBtn = container.find("#confirmDinner-btn");
	
    this.update = function() {

        var starter = model.getSelectedDish("starter");
        var main = model.getSelectedDish("main dish");
        var dessert = model.getSelectedDish("dessert");
		var pending = model.pending;

        if(typeof starter != 'undefined') {
            var starterContent = "<table class='btnContent'><tr><td>" + starter.name + "</td><td class='alignRight'>" + model.getDishPrice(starter.id) + "</td></tr></table>";
            container.find("#myDinnerView-Dishes").append("<button type='button' class='btn btn-primary'>" + starterContent + "</button>");
        }
        if(typeof main != 'undefined') {
            var mainContent = "<table class='btnContent'><tr><td>" + main.name + "</td><td class='alignRight'>" + model.getDishPrice(main.id) + "</td></tr></table>";
            container.find("#myDinnerView-Dishes").append("<button class='btn btn-primary'>" + mainContent + "</button>");
        }
        if(typeof dessert != 'undefined') {
            var dessertContent = "<table class='btnContent'><tr><td>" + dessert.name + "</td><td class='alignRight'>" + model.getDishPrice(dessert.id) + "</td></tr></table>";
            container.find("#myDinnerView-Dishes").append("<button class='btn btn-primary'>" + dessertContent + "</button>");
        }
		if (typeof pending != 'undefined') {
			container.find("#myDinnerView-Pending").html("");
			var pendingContent = "<table class='btnContent'><tr><td>" + "Pending" + "</td><td class='alignRight'>" + model.getDishPrice(pending.id) + "</td></tr></table>";
			container.find("#myDinnerView-Extra").append("<button class='btn btn-info'>" + pendingContent + "</button>");
			container.find("#myDinnerTotalPrice").html("SEK " + (model.getTotalMenuPrice() + model.getDishPrice(pending.id)));
		}

        container.find("#myDinnerTotalPrice").html("SEK " + model.getTotalMenuPrice());
           
    }
	
	this.show = function() {
	    container.show();	    
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
