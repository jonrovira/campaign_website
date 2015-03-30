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
                firstName: 'Patrick',
                lastName: 'Franks',
        		position: 'President, Robotics Club',
        		image: 'https://unsplash.it/500/500?image=646'
        	},
        	{
        		className: 'endorsement',
                firstName: 'Jon',
                lastName: 'Rovira',
        		position: 'Ex-CEO, AirHop',
        		image: 'https://unsplash.it/500/500?image=550'
        	},
        	{
        		className: 'endorsement',
                firstName: 'Cody',
                lastName: 'Schiffer',
        		position: 'President, Bitch Club',
        		image: 'https://unsplash.it/500/500?image=633'
        	},
            {
                className: 'endorsement',
                firstName: 'Chris',
                lastName: 'Dayal',
                position: 'President, Carib Nation',
                image: 'https://unsplash.it/500/500?image=634'
            },


            {
                className: 'endorsement',
                firstName: 'Bryan',
                lastName: 'Berger',
                position: 'President, Points for a Purpose',
                image: 'https://unsplash.it/500/500?image=635'
            },
            {
                className: 'endorsement',
                firstName: 'Chris',
                lastName: 'Howard',
                position: 'Vice President, ODB',
                image: 'https://unsplash.it/500/500?image=636'
            },
            {
                className: 'endorsement',
                firstName: 'Christina',
                lastName: 'Kim',
                position: 'Vice President, ASG',
                image: 'https://unsplash.it/500/500?image=637'
            },
            {
                className: 'endorsement',
                firstName: 'Noah',
                lastName: 'Star',
                position: 'President, ASG',
                image: 'https://unsplash.it/500/500?image=638'
            },


            {
                className: 'highlight',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.'
            },

             {
                className: 'endorsement',
                firstName: 'Bryan',
                lastName: 'Berger',
                position: 'President, Points for a Purpose',
                image: 'https://unsplash.it/500/500?image=635'
            },
            {
                className: 'endorsement',
                firstName: 'Chris',
                lastName: 'Howard',
                position: 'Vice President, ODB',
                image: 'https://unsplash.it/500/500?image=636'
            },
            {
                className: 'endorsement',
                firstName: 'Christina',
                lastName: 'Kim',
                position: 'Vice President, ASG',
                image: 'https://unsplash.it/500/500?image=637'
            },
            {
                className: 'endorsement',
                firstName: 'Noah',
                lastName: 'Star',
                position: 'President, ASG',
                image: 'https://unsplash.it/500/500?image=638'
            },


             {
                className: 'endorsement',
                firstName: 'Bryan',
                lastName: 'Berger',
                position: 'President, Points for a Purpose',
                image: 'https://unsplash.it/500/500?image=635'
            },
            {
                className: 'endorsement',
                firstName: 'Chris',
                lastName: 'Howard',
                position: 'Vice President, ODB',
                image: 'https://unsplash.it/500/500?image=636'
            },
            {
                className: 'endorsement',
                firstName: 'Christina',
                lastName: 'Kim',
                position: 'Vice President, ASG',
                image: 'https://unsplash.it/500/500?image=637'
            },
            {
                className: 'endorsement',
                firstName: 'Noah',
                lastName: 'Star',
                position: 'President, ASG',
                image: 'https://unsplash.it/500/500?image=638'
            },


            {
                className: 'endorsement',
                firstName: 'Bryan',
                lastName: 'Berger',
                position: 'President, Points for a Purpose',
                image: 'https://unsplash.it/500/500?image=635'
            },
            {
                className: 'endorsement',
                firstName: 'Chris',
                lastName: 'Howard',
                position: 'Vice President, ODB',
                image: 'https://unsplash.it/500/500?image=636'
            },
            {
                className: 'endorsement',
                firstName: 'Christina',
                lastName: 'Kim',
                position: 'Vice President, ASG',
                image: 'https://unsplash.it/500/500?image=637'
            },
            {
                className: 'endorsement',
                firstName: 'Noah',
                lastName: 'Star',
                position: 'President, ASG',
                image: 'https://unsplash.it/500/500?image=638'
            },


            {
                className: 'highlight',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.'
            },


            {
                className: 'endorsement',
                firstName: 'Bryan',
                lastName: 'Berger',
                position: 'President, Points for a Purpose',
                image: 'https://unsplash.it/500/500?image=200'
            },
            {
                className: 'endorsement',
                firstName: 'Chris',
                lastName: 'Howard',
                position: 'Vice President, ODB',
                image: 'https://unsplash.it/500/500?image=201'
            },
            {
                className: 'endorsement',
                firstName: 'Christina',
                lastName: 'Kim',
                position: 'Vice President, ASG',
                image: 'https://unsplash.it/500/500?image=202'
            },
            {
                className: 'endorsement',
                firstName: 'Noah',
                lastName: 'Star',
                position: 'President, ASG',
                image: 'https://unsplash.it/500/500?image=203'
            },
        ];

  });
