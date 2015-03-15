'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

 	.directive('resizemain', function ($window) {
	    return function (scope, element) {
	    	// Dynamic height
	    	setTimeout(function() {
	    		$('main.main').height($(window).height());
	    		var videoHalfHeight = $('main.main video').height() * 0.5;
	    		$('main.main video').css('margin-top', '-' + videoHalfHeight + 'px');
	    	}, 100);
	        $(window).resize(function () {
	        	$('main.main').height($(window).height());
	        	var mainHalfHeight = $('main.main video').height() * 0.5;
	        	$('main.main video').css('margin-top', '-' + mainHalfHeight + 'px');
	        });

	        // Banner fade in
	        setTimeout(function() {
	    		$('main.main div.banner').fadeIn(800);
	    	}, 2000);
	    }
	})
