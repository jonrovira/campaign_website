'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:EndorsementsCtrl
 * @description
 * # EndorsementsCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
	.controller('EndorsementsCtrl', function ($rootScope, $scope, $route) {

  	$rootScope.activeTab = $route.current.activeTab;

  	var $container = $('.js-masonry');
	// initialize
	$('.js-masonry').imagesLoaded(function() {
		$container.masonry({
	  		gutter: 20,
	  		itemSelector: '.block',
	  		isAnimated: true,
		});
	});

	// var msnry = $container.data('masonry');


    $scope.blocks = [
    	{
    		className: 'endorsement',
    		name: 'Patrick Franks',
    		position: 'President, Robotics Club',
    		image: 'https://unsplash.it/500/500?image=646',
    		rowCol: [0, 1],
    		size: [1, 1]

    	},
    	{
    		className: 'endorsement',
    		name: 'Jon Rovira',
    		position: 'Ex-CEO, AirHop',
    		image: 'https://unsplash.it/500/500?image=550',
    		rowCol: [0, 2],
    		size: [1, 1]
    	},
    	{
    		className: 'endorsement',
    		name: 'Cody Schiffer',
    		position: 'President, Bitch Club',
    		image: 'https://unsplash.it/500/500?image=633',
    		rowCol: [0, 3],
    		size: [1, 1]
    	}
    ]
  });
