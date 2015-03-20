'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:LoaderCtrl
 * @description
 * # LoaderCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
 	.controller('LoaderCtrl', function ($rootScope, $scope, $route) {
 		console.log('Showing loader!');
  	});

angular.module('campaignWebsiteApp')
	.directive('ngLoader', function() {

		var hideEl = function(element) {
			element.css('display', 'none');
		};

		return {
			restrict: 'E',
			template: 
				'<div class="loader-container">' +
 					'<div class="loader"></div>' +
				'</div>',
			link: function(scope, element) {
				console.log('Running link function.');
				var requiredHeight = $(window).height() * 0.9;
				$('div.loader-container').height(requiredHeight);
				$(window).resize(function() {
					var requiredHeight = $(window).height() * 0.9;
					$('div.loader-container').height(requiredHeight);
				});

				setTimeout(function() {
					hideEl(element);
				}, 500);
			}
		}
	});