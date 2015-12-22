/// <reference path="../services/playlistservice.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var controllers;
    (function (controllers) {
        var TSDemoController = (function () {
            function TSDemoController(playListService) {
                var _this = this;
                this.getFavourites = function () {
                    getFavouritesShow: false;
                };
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
                this.favorites = this.playListService.getPlayList();
                getFavouritesShow: true;
            }
            TSDemoController.$inject = ["angularWithTS.Services.PlayListService"];
            return TSDemoController;
        })();
        controllers.TSDemoController = TSDemoController;
        angular.module("angularWithTS").controller("angularWithTS.controllers.tsDemoController", TSDemoController);
    })(controllers = angularWithTS.controllers || (angularWithTS.controllers = {}));
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=tsDemoController.js.map