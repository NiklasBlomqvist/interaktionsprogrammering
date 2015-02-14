var SelectDishViewController = function(view, controller) {

    view.searchBtn.click(function() {
		var values = [];
		
        var searchText = view.searchField[0].value;
		values.push(searchText);
		
		//TODO: Read dish type from dropdown list and push it to values array
		
		controller.updateView(view.searchBtn[0].id, values);
    });
}
