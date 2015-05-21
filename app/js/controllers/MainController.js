/**
 * Created by Nikolay on 5/19/2015.
 */
app.controller('MainController', function($scope, userService) {
    $scope.loginUser = function (user) {
        console.log(user);

        userService.loginUser(user);
    }

    $scope.registerUser = function (user) {
        console.log(user);
    }
});