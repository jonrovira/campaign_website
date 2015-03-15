'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
 	.controller('TeamCtrl', function ($rootScope, $scope, $route) {
    	$scope.awesomeThings = [
      		'HTML5 Boilerplate',
      		'AngularJS',
      		'Karma'
    	];

    	$rootScope.activeTab = $route.current.activeTab;
  	});
