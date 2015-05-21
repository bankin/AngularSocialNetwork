var app = angular.module('SocialNetworkApp', ['ngRoute']);

app.constant('serviceUrl', 'http://softuni-social-network.azurewebsites.net/api');


app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'templates/main/base.html',
        controller: 'MainController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/main/base.html',
        controller: 'MainController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/main/base.html',
        controller: 'MainController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});