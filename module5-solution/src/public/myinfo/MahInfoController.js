(function () {
    "use strict";
    angular.module('public').controller('MahInfoController', MahInfoController)
    MahInfoController.$inject= ['ShousaiService', 'ApiBasePath'];
    function MahInfoController(ShousaiService, ApiBasePath) {
        var carl = this;
        console.log("get here")
        carl.usr;
        carl.apiBasePath = ApiBasePath;
        var promise = ShousaiService.getItem();
        if(promise){
            promise.then(function(res){
                carl.item = res;
                carl.usr = ShousaiService.usr;
            })
        }
    }
})();