var app = angular.module("MyForm", ['ui.bootstrap']);

app.controller('CreateController', ['$scope', function ($scope) {






    $scope.blankConfig = {};

    $scope.reset = function () {
        $scope.configuration = angular.copy($scope.blankConfig);
    };

    $scope.reset();

}])