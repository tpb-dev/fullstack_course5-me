(function () {
    'use strict';
    angular.module("ddata")
        .controller("CategoryComponentController",CategoryComponentController)
        .component("categories", {
            templateUrl : "src/templates/cat-temp.html",
            bindings : {
                categories : "<"
            },
            controller : CategoryComponentController
        });

    CategoryComponentController.$inject = ['MenuDataService'];
    function CategoryComponentController(MenuDataService) {
        console.log("here 3")
        var $control = this;
        MenuDataService.getAllCategories().then(function(res){
            $control.categories = res;
            console.log("here a million")
            console.log($control.categories);
            console.log("menu = " +  MenuDataService.getAllCategories())
        });
    }
})();