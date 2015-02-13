$(function() {
	//We instantiate our model
	var model = new DinnerModel();
    
    var stateController = new StateController(model);    
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	
    /*
	var firstPageView = new FirstPageView($("#firstPageView"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var dishListView = new DishListView($("#dishListView"), model);
    var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
    var dinnerOverviewTopView = new DinnerOverviewTopView($("#dinnerOverviewView-top"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerPreparationView = new DinnerPreparationView($("#dinnerPreparationView"), model);
    */
	
    //var exampleViewController = new ExampleViewController(exampleView,model);


    //var firstPageViewController = new firstPageViewController(firstPageView, model);

    // firstPageView
    /*
    firstPageView.show();
    */  

    //  myDinnerView + seletDishView + dishListView   
    /*
    myDinnerView.show();
    selectDishView.show();
	dishListView.show();
    dishListView.update("main dish", "");
	//dishListView.update("dessert", "Strawberry");
    */

    // myDinnerView with 2 dishes + dishDetailsView (LASAGNE) pending state
    /*
    model.addDishToMenu(1);
    model.addDishToMenu(200);

    myDinnerView.show();
    dishDetailsView.show();

    var dish = model.getDish(100);
    
    myDinnerView.updatePending(dish);
    dishDetailsView.update(dish);
    */

    // myDinnerView with 1 dish + selectDishView + dishListView
    /*
    model.addDishToMenu(1);
    myDinnerView.show();
    selectDishView.show();
    dishListView.update("main dish", "");
	dishListView.show();
    */



    // dinnerOverView with 3 dishes   
    /*
    model.addDishToMenu(1);
    model.addDishToMenu(102);
    model.addDishToMenu(201);
    dinnerOverviewTopView.show();
    dinnerOverviewView.show();
    dinnerOverviewView.update();
    */

    // dinnerPreparationView
    /*
    model.addDishToMenu(1);
    model.addDishToMenu(101);
    model.addDishToMenu(200);
    
    dinnerOverviewTopView.show();
    
    dinnerPreparationView.show();
	*/
});
