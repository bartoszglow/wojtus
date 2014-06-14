var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'aboutCtrl',
                templateUrl: 'views/about.html'
            })
        .otherwise({ redirectTo: '/' });
}]);