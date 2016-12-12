angular.module('zabihahPage', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'homePageController'
            })
            .otherwise({
                templateUrl: 'app/views/error.html'
            })
    }]);
