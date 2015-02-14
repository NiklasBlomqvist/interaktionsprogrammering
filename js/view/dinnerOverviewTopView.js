//Dinner Overview Top Object constructor
var DinnerOverviewTopView = function (container, model) {

	this.goBackBtn = container.find("#dinnerOverviewView-goBackButton");
	
	this.show = function() {
	    container.show();
	    
	}
	
	this.hide = function() {
	    container.hide();
	}
}
 
