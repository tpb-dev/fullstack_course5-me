(function () {
    "use strict";
    angular.module('public')
        .controller('SignupController', SignupController)
        .service("ShousaiService",ShousaiService)
        .constant("ApiBasePath","https://rt-course5.herokuapp.com");
    SignupController.$inject = ['ShousaiService']
    function SignupController(ShousaiService) {
        var myCtrl = this;
        myCtrl.completed = false;
        myCtrl.setDeets = function () {
            console.log("Inside setDeets: " + myCtrl);
            myCtrl.completed = true;
            return ShousaiService.setDeets(myCtrl.usr);
        }
        myCtrl.validateThis = function() {
            ShousaiService.validateThis(myCtrl.usr)
                .then(function(response){
                    console.log(response.data);
                    myCtrl.aValidatedCategory = true;
                }).catch(function(er){
                myCtrl.aValidatedCategory = false;
            });
        }
    }
    ShousaiService.$inject = ["$http","ApiBasePath"]
    function ShousaiService($http,ApiBasePath) {
        var shousaiSabisu = this;
        shousaiSabisu.setDeets = function(usr) {
            shousaiSabisu.usr = usr;
        }
        shousaiSabisu.getItem = function() {
            if(shousaiSabisu.usr) {
                return $http.get(ApiBasePath + '/menu_items/' + shousaiSabisu.usr.theBestCategoryEver + '.json')
                    .then(function (response) {
                        return response.data;
                    });
            } else {
                console.error("User is undefined")
            }
            return;
        }
        shousaiSabisu.validateThis = function(usr) {
            return $http({
                method : "GET",
                url : ApiBasePath +'/menu_items/'+usr.theBestCategoryEver+'.json'
            });
        }
    }
})();