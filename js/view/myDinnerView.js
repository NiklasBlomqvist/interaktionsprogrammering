//My Dinner View Object constructor
var MyDinnerView = function (container, model) {

	model.addObserver(this);
    
    this.viewContainer = container;    

	this.confirmBtn = container.find("#confirmDinner-btn");
    this.spinner = container.find("#spinner");
	
    this.update = function(obj) {

        var starter = model.getSelectedDish("starter");
        var main = model.getSelectedDish("main dish");
        var dessert = model.getSelectedDish("dessert");
		var pending = model.getPending();

        container.find("#myDinnerView-Dishes").html("");

        if(typeof starter != 'undefined') {
            var starterContent = "<table class='btnContent'><tr><td>" + starter.name + "</td><td class='alignRight'>" + model.getDishPrice(starter.id) + "</td></tr></table>";
            container.find("#myDinnerView-Dishes").append("<button id='starterBtn' button type='button' class='btn btn-primary'>" + starterContent + "</button>" + "<input type='image' id='removeStarter' class='removeDishBtn' src='images/kryss.png' width='15' height='15'>");
        }
        if(typeof main != 'undefined') {
            var mainContent = "<table class='btnContent'><tr><td>" + main.name + "</td><td class='alignRight'>" + model.getDishPrice(main.id) + "</td></tr></table>";
            container.find("#myDinnerView-Dishes").append("<button id='mainBtn' button class='btn btn-primary'>" + mainContent + "</button>" + "<input type='image' id='removeMain' class='removeDishBtn' src='images/kryss.png' width='15' height='15'>");
        }
        if(typeof dessert != 'undefined') {
            var dessertContent = "<table class='btnContent'><tr><td>" + dessert.name + "</td><td class='alignRight'>" + model.getDishPrice(dessert.id) + "</td></tr></table>";
            container.find("#myDinnerView-Dishes").append("<button id ='dessertBtn' button class='btn btn-primary'>" + dessertContent + "</button>" + "<input type='image' id='removeDessert' class='removeDishBtn' src='images/kryss.png' width='15' height='15'>");
        }
		if (typeof pending != 'undefined') {
			container.find("#myDinnerView-Pending").html("");
			var pendingContent = "<table class='btnContent'><tr><td>" + "Pending" + "</td><td class='alignRight'>" + model.getDishPrice(pending.id) + "</td></tr></table>";
			container.find("#myDinnerView-Extra").html("<button class='btn btn-info'>" + pendingContent + "</button>");
   

            container.find("#myDinnerTotalPrice").html("SEK " + (model.getTotalMenuPrice() + model.getDishPrice(pending.id)));
            
		} 
        // If pending is undefined, remove it from list and add the default value
		if (typeof pending == 'undefined') {
            container.find("#myDinnerView-Extra").html("");
			container.find("#myDinnerView-Pending").html("<td><br> Pending </td> <td class='alignRight'><br> 0.00</td>");  
            container.find("#myDinnerTotalPrice").html("SEK " + model.getTotalMenuPrice());     
        }


           
    }
	
	this.show = function() {
	    container.show();	    
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
