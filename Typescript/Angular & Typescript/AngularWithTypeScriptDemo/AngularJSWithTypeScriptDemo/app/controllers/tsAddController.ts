/// <reference path="../services/playlistservice.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module angularWithTS.controllers {
    export class TSAddController {

        playListService: angularWithTS.Interfaces.IPlaylistService;
        static $inject = ["angularWithTS.Services.PlayListService"];
        favorites: Array<angularWithTS.Interfaces.ITrack>;
        favoriteItem: angularWithTS.Interfaces.ITrack;

        constructor(playListService: angularWithTS.Interfaces.IPlaylistService) {

            this.playListService = playListService;
        }


        addItem = () => {
            //this.favorites = this.playListService.getPlayList();
            this.favoriteItem = { id: 4, title: "Boing 747", artist: "Ministarke", rating: 5 };
            this.favorites.push(this.favoriteItem);

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