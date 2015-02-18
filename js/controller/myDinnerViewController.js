var MyDinnerViewController = function(view, controller) {

    view.spinner.change(function(){
        controller.model.setNumberOfGuests(view.spinner.val());
    });

    view.confirmBtn.click(function() {
        controller.model.setPending();
        controller.changeState(view.confirmBtn[0].id);
    });

    view.viewContainer.on("click", "#removeStarter", function() {
        controller.model.removeDishFromMenu(controller.model.starter.id);
    });

    view.viewContainer.on("click", "#removeMain", function() {
        controller.model.removeDishFromMenu(controller.model.mainDish.id);
    });

    view.viewContainer.on("click", "#removeDessert", function() {
        controller.model.removeDishFromMenu(controller.model.dessert.id);
    });



    // If someone clicks on the starter dish
	view.viewContainer.on("click", "#starterBtn", function() {
        controller.model.setPending(controller.model.starter);
        controller.changeState("dishBtn");
	});

    // If someone clicks on the main dish
	view.viewContainer.on("click", "#mainBtn", function() {
        controller.model.setPending(controller.model.mainDish);
        controller.changeState("dishBtn");
	});

    // If someone clicks on the dessert dish
	view.viewContainer.on("click", "#dessertBtn", function() {
        controller.model.setPending(controller.model.dessert);
        controller.changeState("dishBtn");
	});

    /* Removes the starter, main dish or dessert if the "x"-button is clicked*/



}
