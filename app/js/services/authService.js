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
        var userObject = sessionStorage['currentUser'];
        if (userObject) {
            return JSON.parse(sessionStorage['currentUser']);
        }
    }

    function isAnonymous() {
        return sessionStorage['currentUser'] == undefined;
    }

    function isLoggedIn() {
        return sessionStorage['currentUser'] != undefined;
    }

    function isNormalUser() {
        var currentUser = this.getCurrentUser();
        return (currentUser != undefined) && (!currentUser.isAdmin);
    }

    function isAdmin() {
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
        getUser: getCurrentUser,
        isAnonymous: isAnonymous,
        isLogged: isLoggedIn,
        isNormal: isNormalUser,
        isAdmin: isAdmin,
        getAuthHeaders: getAuthHeaders
    }
});