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
	var dinnerOverviewTopViewController = new DinnerOverviewTopViewController(dinnerOverviewTopView, this);

    firstPageView.show();
    visibleViews.push(firstPageView);

    this.changeState = function( clickedId ) {
        console.log( clickedId );

        for(var i=0; i<visibleViews.length; i++) {
            visibleViews[i].hide();
        }

        visibleViews = [];

        if(clickedId === "createNewDinnerBtn" || clickedId === "dinnerOverviewView-goBackButton") {
            visibleViews.push(myDinnerView);
            visibleViews.push(selectDishView);
            visibleViews.push(dishListView);
        }
        
        for(var i=0; i<visibleViews.length; i++) {
            visibleViews[i].show();
        }        


    }

}
