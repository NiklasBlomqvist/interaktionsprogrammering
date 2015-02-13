var FirstPageViewController = function(view, controller) {

    view.createNewDinnerBtn.click(function() {
        controller.changeState(view.createNewDinnerBtn[0].id);
    });

}
