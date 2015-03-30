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
	.directive('loader', function() {

		return {
			restrict: 'EA',
			link: function(scope, element) {

				// Once angular compiles element's DOM...
				scope.$watch('$viewContentLoaded', function() {

					// Hide all children
					element.children().css('visibility', 'hidden');

					// Insert and position loader
					var loader = '<div class="loader-container">' +
	 						         '<div class="loader"></div>' +
					             '</div>';
					element.prepend(loader);
					$(window).resize(function() {
						var windowHt = $(window).height();
						var headerHt = $('header').height();
						$('div.loader-container').height(windowHt - headerHt);
						$('div.loader-container div.loader').css('top', (windowHt - headerHt)/2);
					}).resize();

					// Once images within element finish loading...
					element.imagesLoaded(function() {

						// Wait a bit, then remove loader & show children
						setTimeout(function() {
							$('div.loader-container').remove();
							element.children().css('visibility', 'visible');
						}, 500);
					});
				});

			}
		};
	});