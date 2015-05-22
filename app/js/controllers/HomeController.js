/**
 * Created by nikyb_000 on 5/22/2015.
 */
app.controller('HomeController', function($scope, $location, authService, profileService, notyService) {

    profileService.getMyProfile(
        function(data){
            $scope.profileInfo = data;
        },
        function(data){
            notyService.showError("Error getting data", data);
        }
    );

    $scope.name = 'home';

    if (!authService.isLogged()) {
        goLogin();
    }

    function goLogin() {
        $location.path('/');
    }
});