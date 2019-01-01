(function () {
    'use strict';

    angular.module("ddata")
        .component("items", {
            templateUrl : "src/templates/item-single.html",
            bindings : {
                items : "<"
            },
            controller : "ItemsController as itemInfo"
        })
        .controller("ItemsController", ItemsController);

    console.log("here2")

    ItemsController.$inject=["$stateParams","MenuDataService"];
    function ItemsController($stateParams,MenuDataService) {
        console.log("here")
        var $controller = this;
        var items = MenuDataService.getItemsForCategory($stateParams.itemID);
        items.then(function(res) {
            $controller.menu_items = res.menu_items;
        });
    }
})();