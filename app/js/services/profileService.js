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

    function getFeedData (id, pageSize, success, error) {
        var request = {
            method: 'GET',
            url: serviceUrl + '/me/feed?StartPostId=0&PageSize=5',
            headers: authService.getAuthHeaders()
        };
        $http(request).success(success).error(error);
    }

    return {
        getMyProfile: getMyProfile,
        getFeedData: getFeedData
    }
});