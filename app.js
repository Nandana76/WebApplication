var app = angular.module('ExpenseApp', []);
app.controller('MainController', function($scope, $window) {
    $scope.login = function() {
        $window.location.href = 'home.html';
    };
});