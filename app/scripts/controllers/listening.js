'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:ListeningCtrl
 * @description
 * # ListeningCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
 	.controller('ListeningCtrl', function ($rootScope, $scope, $route, $http, $sce) {
    	$rootScope.activeTab = $route.current.activeTab;
    	
    	$http.get('https://afternoon-atoll-8482.herokuapp.com/instagram')
    		.success(function(data, status, headers, config) {
    			var arr = [];
    			for (var i = 0; i < data.length; i++) {
    				arr.push($sce.trustAsHtml(data[i]));
    			}
    			$scope.instas = arr;
    		});
  });
