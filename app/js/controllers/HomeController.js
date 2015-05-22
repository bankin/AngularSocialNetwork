/**
 * Created by nikyb_000 on 5/22/2015.
 */
app.controller('HomeController', function($scope, $location, authService) {
    if (!authService.isLogged()) {
        console.log('redirect');
        //goLogin();
    }

    function goLogin() {
        $location.path('/');
    }
});