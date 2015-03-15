'use strict';


angular.module('campaignWebsiteApp')
	.controller('EndorsementsCtrl', function ($rootScope, $scope, $route) {

        // Allows nav panel to highlight active tab
      	$rootScope.activeTab = $route.current.activeTab;


        // Set up Masonry
      	var $container = $('ul.js-masonry');
    	$('ul.js-masonry').imagesLoaded(function() {
    		$container.masonry({
                columnWidth: 260,
                itemSelector: '.block',
    	  		gutter: 20,
    	  		isAnimated: true,
    		});
    	});

        // Endorsement list
        $scope.blocks = [
        	{
        		className: 'endorsement',
        		name: 'Patrick Franks',
        		position: 'President, Robotics Club',
        		image: 'https://unsplash.it/500/500?image=646'
        	},
            {
                className: 'highlight',
                text: "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you."
            },
        	{
        		className: 'endorsement',
        		name: 'Jon Rovira',
        		position: 'Ex-CEO, AirHop',
        		image: 'https://unsplash.it/500/500?image=550'
        	},
        	{
        		className: 'endorsement',
        		name: 'Cody Schiffer',
        		position: 'President, Bitch Club',
        		image: 'https://unsplash.it/500/500?image=633'
        	},
            {
                className: 'endorsement',
                name: 'Chris Dayal',
                position: 'President, Carib Nation',
                image: 'https://unsplash.it/500/500?image=634'
            },
            {
                className: 'endorsement',
                name: 'Bryan Berger',
                position: 'President, Points for a Purpose',
                image: 'https://unsplash.it/500/500?image=635'
            },
            {
                className: 'endorsement',
                name: 'Chris Howard',
                position: 'Vice President, ODB',
                image: 'https://unsplash.it/500/500?image=636'
            },
            {
                className: 'highlight',
                text: "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. "
            },
            {
                className: 'endorsement',
                name: 'Christina Kim',
                position: 'Vice President, ASG',
                image: 'https://unsplash.it/500/500?image=637'
            },
            {
                className: 'endorsement',
                name: 'Noah Starr',
                position: 'President, ASG',
                image: 'https://unsplash.it/500/500?image=638'
            },
        ];

        $scope.random = function() {
            return 0.5 - Math.random();
        }
  });
