'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
 	.controller('AboutCtrl', function ($rootScope, $scope, $route) {
    	$scope.awesomeThings = [
      		'HTML5 Boilerplate',
      		'AngularJS',
      		'Karma'
    	];

    	$rootScope.activeTab = $route.current.activeTab;
  });
