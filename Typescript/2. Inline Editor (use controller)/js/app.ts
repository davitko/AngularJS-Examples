var app = angular.module('MyApp', []);

app.controller('MyController', ["$scope", ($scope)
                                => new Application.Controllers.MyController($scope)]);