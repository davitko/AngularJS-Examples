/// <reference path="../interfaces/interfaces.ts" />
var angularWithTS;
(function (angularWithTS) {
    var Services;
    (function (Services) {
        var PlayListService = (function () {
            function PlayListService($http) {
                var _this = this;
                this.getInitPlaylist = function () {
                    _this.listOfTracks = [
                        { id: 0, title: "Numb", artist: "Linkin Park", rating: 5 },
                        { id: 1, title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                        { id: 2, title: "Yellow", artist: "coldplay", rating: 4.5 },
                        { id: 3, title: "Skyfall", artist: "Adele", rating: 4.5 }
                    ];
                    return _this.listOfTracks;
                };
                this.getPlayList = function () {
                    //For the purpose of this demo I am returning the hard coded values, hoever in real world application
                    //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.
                    return _this.listOfTracks;
                };
                this.getBlank = function () {
                    var lastId = _this.listOfTracks.length;
                    debugger;
                    lastId++;
                    var result = {
                        id: lastId, title: "", artist: "", rating: 0
                    };
                    return result;
                };
                this.addItem = function (item) {
                    _this.listOfTracks.push(item);
                };
                this.removeItem = function (id) {
                    _this.listOfTracks.splice(id, 1);
                };
                this.httpService = $http;
            }
            PlayListService.$inject = ["$http"];
            return PlayListService;
        })();
        Services.PlayListService = PlayListService;
        angular.module("angularWithTS").service("angularWithTS.Services.PlayListService", PlayListService);
    })(Services = angularWithTS.Services || (angularWithTS.Services = {}));
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=playlistservice.js.map