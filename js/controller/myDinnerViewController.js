var MyDinnerViewController = function(view, controller) {

    view.confirmBtn.click(function() {
        controller.changeState(view.confirmBtn[0].id);
    });

}
