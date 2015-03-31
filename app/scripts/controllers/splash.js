angular.module('campaignWebsiteApp')


	.controller('SplashCtrl', function ($rootScope, $scope, $route) {
		$('main.splash').height($(window).height());
	})



	.directive('resizemain', function ($window) {
	    return function (scope, element) {

	    	// Dynamic height
	    	setTimeout(function() {
	    		$(window).resize(function() {

	    			// Set main height to window height
	    			$('main.splash').height($(window).height());

	    			// Margin-top: -halfHeight
	    			var halfHeight = $('main.splash video').height() * 0.5;
	    			$('main.splash div.filter').css('margin-top', '-' + halfHeight + 'px');

	    		}).resize();
	    	}, 300);
	    }
	});