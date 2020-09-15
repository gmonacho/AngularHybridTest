

export function FoodDirective(): ng.IDirective {

    return {
        restrict: 'A',
        require: 'ngModel',
        template: `<p>DIRECTIVE</p>`,
        replace: true
    }
}

angular.module('app')
    .directive('food', FoodDirective);

