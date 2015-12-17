var app = angular.module("MyForm", ['ui.bootstrap']);

app.controller('EditController', [$scope ', function($scope) {

    $scope.configuration = [
    {
        title: 'Wunderbar configuration',
        description: 'example-config'
    }];



}])