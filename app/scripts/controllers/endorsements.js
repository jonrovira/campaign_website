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
    	  		gutter: 5,
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
                className: 'endorsement',
                name: 'Christina Kim',
                position: 'Vice President, ASG',
                image: 'https://unsplash.it/500/500?image=637'
            },
            {
                className: 'endorsement',
                name: 'Noah Star',
                position: 'President, ASG',
                image: 'https://unsplash.it/500/500?image=638'
            },


            {
                className: 'highlight',
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
            },

            {
                className: 'endorsement',
                name: 'Bryan Berger',
                position: 'President, Points for a Purpose',
                image: 'https://unsplash.it/500/500?image=639'
            },
            {
                className: 'endorsement',
                name: 'Chris Howard',
                position: 'Vice President, ODB',
                image: 'https://unsplash.it/500/500?image=640'
            },
            {
                className: 'endorsement',
                name: 'Christina Kim',
                position: 'Vice President, ASG',
                image: 'https://unsplash.it/500/500?image=641'
            },
            {
                className: 'endorsement',
                name: 'Noah Star',
                position: 'President, ASG',
                image: 'https://unsplash.it/500/500?image=642'
            },


            {
                className: 'endorsement',
                name: 'Bryan Berger',
                position: 'President, Points for a Purpose',
                image: 'https://unsplash.it/500/500?image=643'
            },
            {
                className: 'endorsement',
                name: 'Chris Howard',
                position: 'Vice President, ODB',
                image: 'https://unsplash.it/500/500?image=644'
            },
            {
                className: 'endorsement',
                name: 'Christina Kim',
                position: 'Vice President, ASG',
                image: 'https://unsplash.it/500/500?image=645'
            },
            {
                className: 'endorsement',
                name: 'Noah Star',
                position: 'President, ASG',
                image: 'https://unsplash.it/500/500?image=646'
            },


            {
                className: 'endorsement',
                name: 'Bryan Berger',
                position: 'President, Points for a Purpose',
                image: 'https://unsplash.it/500/500?image=647'
            },
            {
                className: 'endorsement',
                name: 'Chris Howard',
                position: 'Vice President, ODB',
                image: 'https://unsplash.it/500/500?image=648'
            },
            {
                className: 'endorsement',
                name: 'Christina Kim',
                position: 'Vice President, ASG',
                image: 'https://unsplash.it/500/500?image=649'
            },
            {
                className: 'endorsement',
                name: 'Noah Starr',
                position: 'President, ASG',
                image: 'https://unsplash.it/500/500?image=650'
            },


            {
                className: 'highlight',
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
            },



        ];

  });
