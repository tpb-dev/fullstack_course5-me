//Let's make it work
(function () {

    angular.module('NarrowItDownApp', []).service('MenuSearchService', MenuSearchService).controller('NarrowItDownController', NarrowItDownController)
        .component('foundItems', {
            bindings: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: 'NarrowItDownController as nas',
            templateUrl: 'matched.html'
        });

    //Try again
    MenuSearchService.$inject = [ '$http' ];
    function MenuSearchService($http) {
        var svc = this;
        svc.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            }).then(function (res) {
                var theItemsMatched = [];
                if (searchTerm == "") { return theItemsMatched; }
                for (var idx in res.data.menu_items) {
                    var theItem = res.data.menu_items[idx];
                    if (theItem.description.toLowerCase().indexOf(searchTerm) !== -1) {
                        theItemsMatched.push(theItem);
                    }
                }
                return theItemsMatched;
            });
        }
    }

    //This is where the magic happens
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;
        controller.searchTerm = "";

        controller.getRes = function() {
            var pse = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
            pse.then(function (result) {
                controller.mtched = result;
            });
        };

        controller.removeItem = function (itemIndex) {
            controller.mtched.splice(itemIndex, 1);
        };
    }
})();