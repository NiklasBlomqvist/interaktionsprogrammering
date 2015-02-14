var DinnerOverviewTopViewController = function(view, controller) {

    view.goBackBtn.click(function() {
        controller.changeState(view.goBackBtn[0].id);
    });

}
