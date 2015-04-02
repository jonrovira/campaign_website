'use strict';


angular.module('campaignWebsiteApp')
 	.controller('IssuesCtrl', function ($rootScope, $scope, $route) {
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
