//My Dinner View Object constructor
var MyDinnerView = function (container, model) {
    
    this.update = function() {
        container.find("#myDinnerTotalPrice").html("SEK " + model.getTotalMenuPrice());
        //container.find("#placeForStarter").html("HELLO");
    }
	
	this.show = function() {
        this.update();
	    container.show();
	    
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
