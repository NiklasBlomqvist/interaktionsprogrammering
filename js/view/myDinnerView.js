//My Dinner View Object constructor
var MyDinnerView = function (container, model) {
    
    this.update = function() {
        console.log(model.getSelectedDish("starter"));
        console.log(model.getSelectedDish("main dish"));
        console.log(model.getSelectedDish("dessert"));

        var starter = model.getSelectedDish("starter");
        var main = model.getSelectedDish("main dish");
        var dessert = model.getSelectedDish("dessert");


        if(typeof starter != 'undefined') {
            var starterContent = "<table class='btnContent'><tr><td>" + starter.name + "</td><td>" + model.getDishPrice(starter.id) + "</td></tr></table>";
            container.find("#myDinnerView-Dishes").append("<button type='button' class='btn btn-primary'>" + starterContent + "</button>");
        }
        if(typeof main != 'undefined') {
            var mainContent = "<table class='btnContent'><tr><td>" + main.name + "</td><td>" + model.getDishPrice(main.id) + "</td></tr></table>";
            container.find("#myDinnerView-Dishes").append("<button class='btn btn-primary'>" + mainContent + "</button>");
        }
        if(typeof dessert != 'undefined') {
            var dessertContent = "<table class='btnContent'><tr><td>" + dessert.name + "</td><td>" + model.getDishPrice(dessert.id) + "</td></tr></table>";
            container.find("#myDinnerView-Dishes").append("<button class='btn btn-primary'>" + dessertContent + "</button>");
        }

        container.find("#myDinnerTotalPrice").html("SEK " + model.getTotalMenuPrice());
        
        /*
        var tmp = model.getFullMenu(); 
        
        for(var i=0; i<tmp.length; i++) {
            container.find("#placeForDish" + (i+1)).html(tmp[i].name);
            container.find("#placeForDish" + (i+1) + "Price").html(model.getDishPrice(tmp[i].id));
        } */      
    }
	
	this.show = function() {
        this.update();
	    container.show();
	    
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
