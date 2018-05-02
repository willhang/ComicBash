angular.module('appRoutes', ['ngRoute']).config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/landing.html',
            controller: 'LandingPage'
        })
		.when('/profile/', {
            templateUrl: '/views/profile.html',
            controller: 'ProfileController'
        })
		.when('/login/', {
            templateUrl: '/views/login.html',
            controller: 'LoginController'
        })
		.otherwise({
			redirectTo: '/'
		});
    $locationProvider.html5Mode(true);
});