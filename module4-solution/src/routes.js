(function () {
    'use strict';

    angular.module("MenuApp").config(RoutesConfig);

    RoutesConfig.$inject = ["$stateProvider","$urlRouterProvider"];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("home",{
            url : "/",
            templateUrl : "src/templates/home-temp.html"
        }).state("categories",{
            url : "/categories",
            templateUrl : "src/templates/cat-temp.html",
            controller : "CategoryComponentController as control"//,
        }).state("items",{
                url : "/item/{itemID}",
                templateUrl : "src/templates/items-temp.html",
                controller : "ItemsController as itemInfo",
                resolve : {
                    item : ["$stateParams","MenuDataService",function($stateParams,MenuDataService) {
                        var items = MenuDataService.getItemsForCategory($stateParams.itemID);
                        items.then(function(res) {
                            return res.data.menu_items;
                        })
                    }]
                }
            })
    }
})();