/// <reference path="../interfaces/interfaces.ts" />
module angularWithTS.Services {



    export class PlayListService implements angularWithTS.Interfaces.IPlaylistService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        listOfTracks: Array<angularWithTS.Interfaces.ITrack>;
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        getInitPlaylist = () => {
            this.listOfTracks = [
                { id: 0, title: "Numb", artist: "Linkin Park", rating: 5 },
                { id: 1, title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                { id: 2, title: "Yellow", artist: "coldplay", rating: 4.5 },
                { id: 3, title: "Skyfall", artist: "Adele", rating: 4.5 }
            ];
            return this.listOfTracks;
        }

        getPlayList = () => {
            //For the purpose of this demo I am returning the hard coded values, hoever in real world application
            //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.
            
            return this.listOfTracks;
        }

        getBlank = () => {
            var lastId = this.listOfTracks.length;
            debugger;
            lastId++;
            var result =
                {
                    id: lastId, title: "", artist: "", rating: 0
                }
            return result;
        }

        addItem = (item: angularWithTS.Interfaces.ITrack) => {
            this.listOfTracks.push(item);
        }

        removeItem = (id: number) => {
            this.listOfTracks.splice(id, 1);
        }

    }
    angular.module("angularWithTS").service("angularWithTS.Services.PlayListService", PlayListService);
} 