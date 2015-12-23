/// <reference path="../services/playlistservice.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module angularWithTS.controllers {
    export class TSAddController {

        playListService: angularWithTS.Interfaces.IPlaylistService;
        static $inject = ["angularWithTS.Services.PlayListService"];
        static $injectWin = ["$window"];
        favorites: Array<angularWithTS.Interfaces.ITrack>;
        favoriteItem: angularWithTS.Interfaces.ITrack;
        favoriteItemBlank: angularWithTS.Interfaces.ITrack;

        constructor(playListService: angularWithTS.Interfaces.IPlaylistService) {

            this.playListService = playListService;
            this.favoriteItemBlank = this.playListService.getBlank();
        }

        reset = () => {
            this.favoriteItem = angular.copy(this.favoriteItemBlank);

        }

        autoRedirect = ($window) => {
            $window.location.href = "#home";
        }

        save = () => {
            this.playListService.addItem(this.favoriteItem);
        }

    }

    angular.module("angularWithTS").controller("angularWithTS.controllers.tsAddController", TSAddController);
} 