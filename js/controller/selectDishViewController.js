var SelectDishViewController = function(view, controller) {

    view.searchBtn.click(function() {	
        var searchText = view.searchField[0].value;
		controller.model.setFilter(searchText);
    });
	
	view.dropdownOptions[0].click( function() {
		controller.model.setType("starter");
	});
	
	view.dropdownOptions[1].click( function() {
		controller.model.setType("main dish");
	});
	
	view.dropdownOptions[2].click( function() {
		controller.model.setType("dessert");
	});
}
