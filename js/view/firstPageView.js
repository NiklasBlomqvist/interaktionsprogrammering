//First Page View Object constructor
var FirstPageView = function (container, model) {
    
    this.createNewDinnerBtn = container.find("#createNewDinnerBtn");
	
	this.show = function() {
	    container.show();
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
