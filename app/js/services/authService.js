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

    function register(userData, success, error) {
        var request = {
            method: 'POST',
            url: serviceUrl + '/users/register',
            data: userData
        };
        $http(request).success(function(data) {
            sessionStorage['currentUser'] = JSON.stringify(data);
            success(data);
        }).error(error);
    }

    function logout() {
        console.log('logout');
        delete sessionStorage['currentUser'];
    }

    function getCurrentUser() {
        console.log('user');
        var userObject = sessionStorage['currentUser'];
        if (userObject) {
            return JSON.parse(sessionStorage['currentUser']);
        }
    }

    function isAnonymous() {
        console.log('anon');
        return sessionStorage['currentUser'] == undefined;
    }

    function isLoggedIn() {
        console.log('logged');
        console.log(sessionStorage['currentUser'] != undefined);
        return sessionStorage['currentUser'] != undefined;
    }

    function isNormalUser() {
        console.log('normal');
        var currentUser = this.getCurrentUser();
        return (currentUser != undefined) && (!currentUser.isAdmin);
    }

    function isAdmin() {
        console.log('admin');
        var currentUser = this.getCurrentUser();
        return (currentUser != undefined) && (currentUser.isAdmin);
    }

    function getAuthHeaders() {
        var headers = {};
        var currentUser = this.getCurrentUser();
        if (currentUser) {
            headers['Authorization'] = 'Bearer ' + currentUser.access_token;
        }
        return headers;
    }

    return {
        loginUser: login,
        registerUser: register,
        logoutUser: logout,
        getCurrentUser: getCurrentUser,
        isAnonymous: isAnonymous,
        isLogged: isLoggedIn,
        isNormal: isNormalUser,
        isAdmin: isAdmin,
        getAuthHeaders: getAuthHeaders
    }
});