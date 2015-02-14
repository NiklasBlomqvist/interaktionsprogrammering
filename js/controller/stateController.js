var StateController = function(model) {
    
    this.model = model;
    var visibleViews = [];

    var firstPageView = new FirstPageView($("#firstPageView"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var dishListView = new DishListView($("#dishListView"), model);
    var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
    var dinnerOverviewTopView = new DinnerOverviewTopView($("#dinnerOverviewView-top"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerPreparationView = new DinnerPreparationView($("#dinnerPreparationView"), model);

    var firstPageViewController = new FirstPageViewController(firstPageView, this);
	var selectDishViewController = new SelectDishViewController(selectDishView, this);
	var dishListViewController = new DishListViewController(dishListView, this);
	var dinnerOverviewTopViewController = new DinnerOverviewTopViewController(dinnerOverviewTopView, this);
	var dinnerOverviewViewController = new DinnerOverviewViewController(dinnerOverviewView, this);

    firstPageView.show();
    visibleViews.push(firstPageView);

	//Hide and show views depending on button clicked
    this.changeState = function( clickedId ) {

        for(var i=0; i<visibleViews.length; i++) {
            visibleViews[i].hide();
        }

        visibleViews = [];

        if(clickedId === "createNewDinnerBtn" || clickedId === "dinnerOverviewView-goBackButton") {
            visibleViews.push(myDinnerView);
            visibleViews.push(selectDishView);
            visibleViews.push(dishListView);
        }
		
		if(clickedId === "#dinnerOverviewView-printButton") {
            visibleViews.push(dinnerOverviewTopView);
            visibleViews.push(dinnerPreparationView);
        }
        
        for(var i=0; i<visibleViews.length; i++) {
            visibleViews[i].show();
        }        
    }

	this.updateView = function( clickedId, values) {
		if (clickedId === "searchBtn") {
			//TODO: After having implemented the TODO in selectDishViewController.js, change "main dish" to values[1]
			dishListViewController.update("main dish", values[0]);
		}
	}
}
