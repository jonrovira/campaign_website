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

	})


	// Dynamic height directive
	.directive('resizenavpanel', function ($window) {
	    return function (scope, element) {
	        var navPanelHeight = $(window).height() - $('header').height();
			$('section.nav-panel').height(navPanelHeight);
	        $(window).resize(function () {
	        	var navPanelHeight = $(window).height() - $('header').height();
				$('section.nav-panel').height(navPanelHeight);
	        });
	    }
	})
