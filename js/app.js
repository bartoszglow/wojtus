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
        .when('/borrow',
            {
                templateUrl: 'views/borrow.html'
            })
        .otherwise({ redirectTo: '/' });
}]);