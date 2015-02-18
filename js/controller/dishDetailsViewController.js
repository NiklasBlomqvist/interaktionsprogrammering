var DishDetailsViewController = function(view, controller) {

	view.viewContainer.on("click", "#backToSelectDishBtn", function() {
        controller.model.setPending();
        controller.changeState("backToSelectDishBtn");
	});

	view.viewContainer.on("click", "#confirmDish", function() {
        controller.model.addDishToMenu(controller.model.pending.id);
        controller.model.setPending();
        controller.changeState("backToSelectDishBtn");
	});
    
}
