/**
 * Created by Nikolay on 5/19/2015.
 */
app.controller('MainController', function($scope, $location, authService, notyService) {
    if (authService.isLogged()) {
        goHome();
    }

    $scope.loginUser = function (user) {
        authService.loginUser(user, function (data) {
            notyService.showInfo("Login successful");
            goHome();
        }, function (data) {
            notyService.showError('Invalid credentials', data);
        });

    }

    $scope.registerUser = function (user) {
        authService.registerUser(user,
            function success() {
                notyService.showInfo("User registered successfully");
                var loginData = {"username": user['username'], "password": user['password'] }
                loginUser(loginData);
            },
            function error(err) {
                notyService.showError("User registration failed", err);
            }
        );
    }

    function goHome() {
        $location.path("/home");
    }
});