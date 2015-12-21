module Application.Controllers {

    export class MyController {

        scope: any;
        data: any;
        $scope.showtooltip = false;
        $scope.value = 'Edit me.';

        constructor($scope: ng.IScope) {
            this.scope = $scope;
            this.data = [];
        }

        private hideTooltip() {
            $scope.showtooltip = false;
        }

        private toggleTooltip(e) {
            e.stopPropagation();
            $scope.showtooltip = !$scope.showtooltip;
        }

    }
}