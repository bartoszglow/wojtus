var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: 'views/about.html'
            })
        .when('/collection',
            {
                controller: 'collectionCtrl',
                templateUrl: 'views/collection.html'
            })
        .when('/options',
            {
                templateUrl: 'views/options.html'
            })
        .otherwise({ redirectTo: '/' });
}]);