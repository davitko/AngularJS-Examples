var app = angular.module("MyForm", ['ui.bootstrap']);

app.controller('CreateController', ['$scope', function ($scope) {



    //Reset function
    $scope.blankConfig = {};

    $scope.reset = function () {
        $scope.configuration = angular.copy($scope.blankConfig);
    };

    $scope.reset();
    //--------------------------

    // Date picker 
    $scope.today = function (whichDate) {
        switch (whichDate) {
        case 'create':
            $scope.dt.create = new Date();
            break;
        case 'start':
            $scope.dt.start = new Date();
            break;
        case 'expiration':
            $scope.dt.expiration = new Date();
            break;
        default:
            $scope.dt = new Date();
        }
    };

    $scope.today = function (whichDate) {

        switch (whichDate) {
        case 'create':
            $scope.configuration.createDate = new Date();
            break;
        case 'start':
            $scope.configuration.startDate = new Date();
            break;
        case 'expiration':
            $scope.configuration.expirationDate = new Date();
            break;
        default:
            $scope.configuration.Date = new Date();
        }
    };

    $scope.today();

    $scope.clear = function (whichDate) {
        switch (whichDate) {
        case 'create':
            $scope.configuration.createDate = '';
            break;
        case 'start':
            $scope.configuration.startDate = '';
            break;
        case 'expiration':
            $scope.configuration.expirationDate = '';
            break;
        default:
            $scope.dt = null;
        }


    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();
    $scope.maxDate = new Date(2020, 5, 22);

    $scope.open = function ($event, id) {

        switch (id) {
        case 'create':
            $scope.status.create.opened = true;
            break;
        case 'start':
            $scope.status.start.opened = true;
            break;
        case 'expiration':
            $scope.status.expiration.opened = true;
            break;
        default:
            $scope.status.opened = true;
        }

    };

    $scope.setDate = function (year, month, day) {
        //        $scope.dt = new Date(year, month, day);
        $scope.configuration.createDate = new Date(year, month, day);
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.status = {
        opened: false
    };

    $scope.status.create = {
        opened: false
    };

    $scope.status.start = {
        opened: false
    };

    $scope.status.expiration = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
      },
        {
            date: afterTomorrow,
            status: 'partially'
      }
    ];

    $scope.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    };

}])