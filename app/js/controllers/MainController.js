/**
 * Created by Nikolay on 5/19/2015.
 */
app.controller('MainController', function($scope, authService, notyService) {
    $scope.loginUser = function (user) {
        console.log(user);

        authService.loginUser(user, function (data) {

        }, function (data) {
            notyService.showError('Invalid credentials', data);
        });

    }

    $scope.registerUser = function (user) {
        authService.registerUser(user, function (data) {
            console.log('register');
            console.log(data);
        }, function (data) {
            console.log('error');
            console.log(data);
        });
    }
});