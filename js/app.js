var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'mainCtrl',
                templateUrl: 'views/main.html'
            })
        .otherwise({ redirectTo: '/' });
}]);