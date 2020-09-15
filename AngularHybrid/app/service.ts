var app = angular.module('hexafy', []);

app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
app.controller('hexCrtl', function($scope, hexafy) {
    $scope.hex = hexafy.myFunc(255);
});