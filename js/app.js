$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	
	var firstPageView = new FirstPageView($("#firstPageView"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var dishListView = new DishListView($("#dishListView"), model);
    var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	
    /*
    myDinnerView.show();
    selectDishView.show();
	dishListView.show();
	dishListView.update("main dish", "");
    */

    
    model.addDishToMenu(1);
    model.addDishToMenu(100);
    myDinnerView.show();
    selectDishView.show();
	dishListView.show();
	dishListView.update("main dish", "");
    

    /*dinnerOverviewView.show();
    model.addDishToMenu(1);
    dinnerOverviewView.update();
    */   
    
    /*
    myDinnerView.show();
    dishDetailsView.show();
    var dish = model.getDish(1);
    dishDetailsView.update(dish);
    */
	
});
