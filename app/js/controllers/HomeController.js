/**
 * Created by nikyb_000 on 5/22/2015.
 */
app.controller('HomeController', function($scope, $location, authService, profileService, notyService) {
    if (!authService.isLogged()) {
        goLogin();
    }

    function goLogin() {
        $location.path('/');
    }

    profileService.getMyProfile(
        function(data){
            $scope.profileInfo = data;
        },
        function(data){
            showError("Error getting profile data", data);
        }
    );

    profileService.getFeedData(0, 5,
        function(data){
            console.log(data);
        },
        function(data){
            showError("Error getting feed data", data);
        }
    );

    function showError(msg, data) {
        notyService.showError(msg, data);
    }
});