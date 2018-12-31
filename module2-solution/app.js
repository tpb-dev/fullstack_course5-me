(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', []).controller('ToBuyController', ToBuyController).controller('AlreadyBoughtController', AlreadyBoughtController).service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShpController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var whatToBuy = this;
        whatToBuy.items = ShoppingListCheckOffService.getTheNotYetBuyItems();
        whatToBuy.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyThisItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var yiJingBought = this;
        yiJingBought.items = ShoppingListCheckOffService.getTheBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var srvc = this;
        var notYetBuyItems = [
            { name: "boba", quantity: 20 },
            { name: "bottles of almond juice", quantity: 3 },
            { name: "lumpia", quantity: 5 },
            { name: "dragonfruit", quantity: 4 },
            { name: "ramen", quantity: 2 },
            { name: "brownies", quantity: 5 },
            { name: "apple", quantity: 9 }

        ];
        var boughtItems = [];

        srvc.buyThisItem = function (itemIndex) {
            var itemThatWasBought = notYetBuyItems[itemIndex];
            notYetBuyItems.splice(itemIndex, 1);
            boughtItems.push(itemThatWasBought);
        };

        srvc.getTheNotYetBuyItems = function () {
            return notYetBuyItems;
        };

        srvc.getTheBoughtItems = function () {
            return boughtItems;
        };

    }

})();