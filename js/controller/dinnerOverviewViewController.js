var DinnerOverviewViewController = function(view, controller) {

    view.printBtn.click(function() {
        controller.changeState(view.printBtn[0].id);
    });

}
