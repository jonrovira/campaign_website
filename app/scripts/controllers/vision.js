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


    	// For navbar highlighting
    	$rootScope.activeTab = $route.current.activeTab;


    	// Highlight sizing
    	$(window).resize(function() {
    		$('div.highlight').each(function() {
    			var $point = $(this).parent().parent();
    			$(this).height($point.height());
    		});
    	}).resize();
  	});
