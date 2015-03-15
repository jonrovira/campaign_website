'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:ListeningCtrl
 * @description
 * # ListeningCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
 	.controller('ListeningCtrl', function ($rootScope, $scope, $route) {
    	$scope.awesomeThings = [
      		'HTML5 Boilerplate',
      		'AngularJS',
      		'Karma'
    	];

    	$rootScope.activeTab = $route.current.activeTab;
  });
