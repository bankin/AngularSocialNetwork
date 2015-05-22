/**
 * Created by nikyb_000 on 5/22/2015.
 */
app.factory('profileService', function($http, serviceUrl, authService) {
    function getMyProfile(success, error) {
        var request = {
            method: 'GET',
            url: serviceUrl + '/me',
            headers: authService.getAuthHeaders()
        };
        $http(request).success(success).error(error);
    }

    return {
        getMyProfile: getMyProfile
    }
});