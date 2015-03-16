'use strict';


angular.module('campaignWebsiteApp')
 	.controller('ListeningCtrl', function ($rootScope, $scope, $route, $http, $sce) {


        // For nav panel active li's
    	$rootScope.activeTab = $route.current.activeTab;
    	

        // Instagram widget
    	$http.get('https://afternoon-atoll-8482.herokuapp.com/instagram')
    		.success(function(data, status, headers, config) {
    			var arr = [];
    			for (var i = 0; i < data.length; i++) {
    				arr.push($sce.trustAsHtml(data[i]));
    			}
    			$scope.instas = arr;
    		});
    });
