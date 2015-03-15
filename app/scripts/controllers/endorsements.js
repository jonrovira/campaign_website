'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:EndorsementsCtrl
 * @description
 * # EndorsementsCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
	.controller('EndorsementsCtrl', function ($rootScope, $scope, $route) {
    	$scope.awesomeThings = [
      		'HTML5 Boilerplate',
      		'AngularJS',
      		'Karma'
    	];

    	$rootScope.activeTab = $route.current.activeTab;
  });
