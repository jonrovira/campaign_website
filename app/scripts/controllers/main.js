'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
 	.controller('MainCtrl', function ($rootScope, $scope, $route) {
    	$scope.awesomeThings = [
      		'HTML5 Boilerplate',
      		'AngularJS',
      		'Karma'
    	];

    	$rootScope.activeTab = $route.current.activeTab;
  	})

 	.directive('resizemain', function ($window) {
	    return function (scope, element) {
	    	// Dynamic height
	    	setTimeout(function() {
	    		$('main.main').height($(window).height() - $('header').height());
	    		var videoHalfHeight = $('main.main video').height() * 0.5;
	    		$('main.main video').css('margin-top', '-' + videoHalfHeight + 'px');
	    	}, 500);
	        $(window).resize(function () {
	        	$('main.main').height($(window).height() - $('header').height());
	        	var mainHalfHeight = $('main.main video').height() * 0.5;
	        	$('main.main video').css('margin-top', '-' + mainHalfHeight + 'px');
	        });

	        // Banner fade in
	        setTimeout(function() {
	    		$('main.main div.banner').fadeIn(2000);
	    	}, 1200);
	    }
	})
