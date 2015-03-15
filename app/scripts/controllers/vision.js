'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:VisionCtrl
 * @description
 * # VisionCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
  	.controller('VisionCtrl', function ($rootScope, $scope, $route) {
    	$scope.awesomeThings = [
      		'HTML5 Boilerplate',
      		'AngularJS',
      		'Karma'
    	];

    	$rootScope.activeTab = $route.current.activeTab;
  	});
