(function() {
    'use strict';

    angular.module("LunchCheck", []).controller("LunchCheckController",LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.theListOfFood = "";
        $scope.msg = "";

        $scope.DoCheckList = function() {

            var parsed = $scope.theListOfFood.trim();
            var empty = (parsed === "");

            if (empty) {
                $scope.msg = "Please enter the data beforehand";
            } else {
                var items = parsed.split(',').length;

                if (items > 3) {
                    $scope.msg = "That is too much food!";
                } else {
                    $scope.msg = "Enjoy your meal!!!";
                }
            }
        };
    };

})();