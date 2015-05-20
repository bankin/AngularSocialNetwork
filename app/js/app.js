var app = angular.module('SocialNetworkApp', ['ngRoute']);

app.constant('serviceUrl', 'http://softuni-social-network.azurewebsites.net/api');


app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'templates/main/login.html',
        controller: 'MainController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/main/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/main/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});