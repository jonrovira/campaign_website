'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:EndorsementsCtrl
 * @description
 * # EndorsementsCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
	.controller('navPanelCtrl', function ($scope, $location) {
		// used to hide navPanel when viewing splash page
		$scope.$on('$routeChangeStart', function() {
			$scope.currentRoute = $location.path();
		});
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
	});
