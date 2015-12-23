/// <reference path="../services/playlistservice.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var controllers;
    (function (controllers) {
        var TSAddController = (function () {
            function TSAddController(playListService) {
                var _this = this;
                this.reset = function () {
                    _this.favoriteItem = angular.copy(_this.favoriteItemBlank);
                };
                this.autoRedirect = function ($window) {
                    $window.location.href = "#home";
                };
                this.save = function () {
                    _this.playListService.addItem(_this.favoriteItem);
                };
                this.playListService = playListService;
                this.favoriteItemBlank = this.playListService.getBlank();
            }
            TSAddController.$inject = ["angularWithTS.Services.PlayListService"];
            TSAddController.$injectWin = ["$window"];
            return TSAddController;
        })();
        controllers.TSAddController = TSAddController;
        angular.module("angularWithTS").controller("angularWithTS.controllers.tsAddController", TSAddController);
    })(controllers = angularWithTS.controllers || (angularWithTS.controllers = {}));
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=tsAddController.js.map