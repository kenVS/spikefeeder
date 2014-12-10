angular.module('DrawingOdds.TabBar', []).
directive('oddsTabBar', function () {
    return {
        scope: {
            activeTab: "@page"
        },
        templateUrl: "/app/drawingodds/tabbar.html"
    };
});