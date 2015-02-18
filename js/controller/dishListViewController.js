var DishListViewController = function(view, controller) {

	view.viewContainer.on("click", ".dishInTable", function() {
		controller.model.setPending(controller.model.getDish(this.id));
		controller.changeState("dishInTable");
	});
}
