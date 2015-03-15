'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:EndorsementsCtrl
 * @description
 * # EndorsementsCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
	.controller('navPanelCtrl', function ($scope) {
		$scope.awesomeThings = [
		  	'HTML5 Boilerplate',
		  	'AngularJS',
		  	'Karma'
		];

		$('section.nav-panel').load(function() {
			var windowHeight = $(window).height();
			console.log(windowHeight);
			$('section.nav-panel').height(windowHeight);
		});

	})

	.directive('resizenavpanel', function ($window) {
	    return function (scope, element) {
	        $('section.nav-panel').height($(window).height());
	        $(window).resize(function () {
	        	$('section.nav-panel').height($(window).height());
	        });
	    }
	})
