app.factory('userService', function($http, serviceUrl) {
    function login(userData, success, error) {
        $http
            .post(serviceUrl + '/api/user/login', userData)
            .success(function(data) {
                success(data);
            })
            .error(function(data) {
                console.log('error');
                console.log(data);
            });
    }

    return {
        loginUser: login
    }
});