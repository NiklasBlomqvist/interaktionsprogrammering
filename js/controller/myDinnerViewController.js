var MyDinnerViewController = function(view, controller) {

    view.spinner.change(function(){
        controller.model.setNumberOfGuests(view.spinner.val());
    });

    view.confirmBtn.click(function() {
        controller.changeState(view.confirmBtn[0].id);
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

}
