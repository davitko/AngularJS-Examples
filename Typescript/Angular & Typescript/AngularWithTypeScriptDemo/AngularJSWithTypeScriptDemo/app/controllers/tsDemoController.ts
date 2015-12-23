/// <reference path="../services/playlistservice.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module angularWithTS.controllers {
    export class TSDemoController {

        playListService: angularWithTS.Interfaces.IPlaylistService;
        static $inject = ["angularWithTS.Services.PlayListService"];
        favorites: Array<angularWithTS.Interfaces.ITrack>;
        favoriteItem: angularWithTS.Interfaces.ITrack;
        getFavouritesShow: boolean;
        constructor(playListService: angularWithTS.Interfaces.IPlaylistService) {

            this.playListService = playListService;
        }

        startInit = () => {
            this.favorites = this.playListService.getInitPlaylist();
        }

        getFavourites = () => {
            this.favorites = this.playListService.getPlayList();
        }

        remove = (id) => {
            this.favorites.splice(id, 1);
        }

        removeLast = () => {
            this.favorites.pop();
        }
    }

    angular.module("angularWithTS").controller("angularWithTS.controllers.tsDemoController", TSDemoController);
} 