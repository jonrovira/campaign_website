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

		return {
			restrict: 'EA',
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
					console.log('Hiding loader');
					element.css('display', 'none');
					$('div.main-feed').show();
				}, 500);
			}
		}
	});