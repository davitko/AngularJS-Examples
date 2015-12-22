var app = angular.module("MyForm", ['ui.bootstrap']);

app.controller('CreateController', ['$scope', function ($scope) {

//Reset function
    $scope.blankConfig = {};

    $scope.reset = function () {
        $scope.configuration = angular.copy($scope.blankConfig);
    };

    $scope.reset();
    //-------------------------
	
}])