(function(){
    'use strict';
    angular.module('ddata').service('MenuDataService', MenuDataService);
    MenuDataService.$inject = ['$http'];
    console.log("here 4")
    function MenuDataService($http) {
        var service = this;
        service.getAllCategories = function() {
            var theURL = "https://davids-restaurant.herokuapp.com/categories.json";
            console.log("Perdoneme")
            return $http({
                method: 'GET',
                url: theURL
            }).then(function(response) {
                return response.data;
            });
        };
        service.getItemsForCategory = function(categoryShortName) {
            var theURL = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
            console.log("Esperanza")
            return $http({
                method: 'GET',
                url: theURL
            }).then(function(response) {
                return response.data;
            });
        };
    };
})();