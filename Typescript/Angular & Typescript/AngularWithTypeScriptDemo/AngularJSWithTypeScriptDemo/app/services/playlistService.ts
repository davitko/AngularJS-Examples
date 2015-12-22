/// <reference path="../interfaces/interfaces.ts" />
module angularWithTS.Services {



    export class PlayListService implements angularWithTS.Interfaces.IPlaylistService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        res: Array<angularWithTS.Interfaces.ITrack>;
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        getPlayList = () => {
            //For the purpose of this demo I am returning the hard coded values, hoever in real world application
            //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.
            
            this.res = [
                { id: 0, title: "Numb", artist: "Linkin Park", rating: 5 },
                { id: 1, title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                { id: 2, title: "Yellow", artist: "coldplay", rating: 4.5 },
                { id: 3, title: "Skyfall", artist: "Adele", rating: 4.5 }
            ];
            return this.res;
        }

        addItem = (item: angularWithTS.Interfaces.ITrack) => {
            this.res.push(item);
        }

        removeItem = (id: number) => {
            this.res.splice(id, 1);
        }



    }
    angular.module("angularWithTS").service("angularWithTS.Services.PlayListService", PlayListService);
} 