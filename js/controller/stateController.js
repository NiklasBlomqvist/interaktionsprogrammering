var StateController = function(model) {
    
    this.model = model;
    var visibleViews = [];

    // Initialising all views
    var firstPageView = new FirstPageView($("#firstPageView"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var dishListView = new DishListView($("#dishListView"), model);
    var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
    var dinnerOverviewTopView = new DinnerOverviewTopView($("#dinnerOverviewView-top"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerPreparationView = new DinnerPreparationView($("#dinnerPreparationView"), model);

    // Initialising all controllers
    var firstPageViewController = new FirstPageViewController(firstPageView, this);
	var selectDishViewController = new SelectDishViewController(selectDishView, this);
	var dishListViewController = new DishListViewController(dishListView, this);
	var dinnerOverviewTopViewController = new DinnerOverviewTopViewController(dinnerOverviewTopView, this);
	var dinnerOverviewViewController = new DinnerOverviewViewController(dinnerOverviewView, this);
	var myDinnerViewController = new MyDinnerViewController(myDinnerView, this);
    var dishDetailsViewController = new DishDetailsViewController(dishDetailsView, this);

    // Initialising the first page and add it to our array over visible views
    firstPageView.show();
    visibleViews.push(firstPageView);
	model.setType("starter"); // A bit of fulhack to force dinner list update

	//Hide and show views depending on button clicked
    this.changeState = function( clickedId ) {

        // Hides all visible views and deletes them from the array
        for(var i=0; i<visibleViews.length; i++) {
            visibleViews[i].hide();
        }

        visibleViews = [];
      
        /*  Depending on the button clicked, display the views intented and add them to the visible views array */ 

        // "Create new dinner"-button clicked, "Go back and edit dinner"-button clicked, "Back to Select Dish"-button clicked
        if(clickedId === "createNewDinnerBtn" || clickedId === "dinnerOverviewView-goBackButton" || clickedId === "backToSelectDishBtn") {
            visibleViews.push(myDinnerView);
            visibleViews.push(selectDishView);
            visibleViews.push(dishListView);
        }
		
        // "Print full recipe"-button clicked
		if(clickedId === "dinnerOverviewView-printButton") {
            visibleViews.push(dinnerOverviewTopView);
            visibleViews.push(dinnerPreparationView);
        }
		
        // "Confirm dinner"-button clicked from myDinnerView
		if(clickedId === "confirmDinner-btn") {
            visibleViews.push(dinnerOverviewTopView);
            visibleViews.push(dinnerOverviewView);
        }
		
        // A dish-image clicked in dishDetailsView or a dish in myDinnerView
		if(clickedId === "dishInTable" || clickedId === "dishBtn") {
			visibleViews.push(myDinnerView);
            visibleViews.push(dishDetailsView);
        }
        
        // Show all the newly pushed views
        for(var i=0; i<visibleViews.length; i++) {
            visibleViews[i].show();
        }        
    }
}
