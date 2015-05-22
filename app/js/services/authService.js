app.factory('authService', function($http, serviceUrl) {
    function login(userData, success, error) {
        var request = {
            method: 'POST',
            url: serviceUrl + '/users/login',
            data: userData
        };
        $http(request).success(function(data) {
            sessionStorage['currentUser'] = JSON.stringify(data);
            success(data);
        }).error(error);
    }

    return {
        loginUser: login
    }
});