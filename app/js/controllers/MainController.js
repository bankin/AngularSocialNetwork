/**
 * Created by Nikolay on 5/19/2015.
 */
app.controller('MainController', function($scope, $location, authService, notyService, profileService) {

    if (authService.isLogged()) {
        goHome();
    }
    else {
        console.log('get data');
        profileService.getMyProfile(
            function(data){
                console.log('scope');
                $scope.profileInfo = data;
            },
            function(data){
                notyService.showError("Error getting data", data);
            }
        );
    }

    $scope.loginUser = function (user) {
        loginUser(user);
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

    $scope.isLoggedIn = function () {
        return authService.isLogged();
    }

    $scope.logoutUser = function () {
        authService.logoutUser();
        $location.path('/');
    }

    function loginUser(user) {
        authService.loginUser(user, function (data) {
            notyService.showInfo("Login successful");
            goHome();
        }, function (data) {
            notyService.showError('Invalid credentials', data);
        });
    }

    function goHome() {
        $location.path("/home");
    }
});