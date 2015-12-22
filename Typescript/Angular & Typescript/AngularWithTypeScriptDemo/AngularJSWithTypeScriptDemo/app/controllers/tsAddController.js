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
                this.addItem = function () {
                    //this.favorites = this.playListService.getPlayList();
                    _this.favoriteItem = { id: 4, title: "Boing 747", artist: "Ministarke", rating: 5 };
                    _this.favorites.push(_this.favoriteItem);
                };
                this.remove = function (id) {
                    _this.favorites.splice(id, 1);
                };
                this.removeLast = function () {
                    _this.favorites.pop();
                };
                this.playListService = playListService;
            }
            TSAddController.$inject = ["angularWithTS.Services.PlayListService"];
            return TSAddController;
        })();
        controllers.TSAddController = TSAddController;
        angular.module("angularWithTS").controller("angularWithTS.controllers.tsDemoController", controllers.TSDemoController);
    })(controllers = angularWithTS.controllers || (angularWithTS.controllers = {}));
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=tsAddController.js.map