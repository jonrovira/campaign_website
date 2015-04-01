'use strict';


angular.module('campaignWebsiteApp')
	.controller('EndorsementsCtrl', function ($rootScope, $scope, $route) {

        // Allows nav panel to highlight active tab
      	$rootScope.activeTab = $route.current.activeTab;


        // Set up Masonry
      	var $container = $('main.endorsements ul.js-masonry');
        $(window).resize(function() {
            $container.imagesLoaded(function() {
                var squareSide = ($container.width() - (3 * 5)) / 4;
                $('li.endorsement').height(squareSide);
                $('li.highlight').height((squareSide * 2) + 5 - 94);
                $container.masonry({
                    columnWidth: squareSide,
                    itemSelector: '.block',
                    gutter: 5,
                    isAnimated: true,
                });
            });
        }).resize();

        // Endorsement list
        $scope.blocks = [
        	{
        		className: 'endorsement',
                firstName: 'Emily',
                lastName: 'Mannheimer',
        		position: 'Former Vice President of Standards for PHA',
        		image: 'https://unsplash.it/500/500?image=646'
        	},
        	{
        		className: 'endorsement',
                firstName: 'Ben',
                lastName: 'Terdich',
        		position: 'Former President of Lambda Chi Alpha',
        		image: 'https://unsplash.it/500/500?image=550'
        	},
        	{
        		className: 'endorsement',
                firstName: 'Erik',
                lastName: 'Baker',
        		position: 'MARS Programming Chair & WNUR Director',
        		image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ErikBaker.jpg'
        	},
            {
                className: 'endorsement',
                firstName: 'Josh',
                lastName: 'O\'Neil',
                position: 'Elder Senator',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JoshONeil.jpg'
            },


            {
                className: 'endorsement',
                firstName: 'Noah',
                lastName: 'Whinston',
                position: 'Position',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NoahWhinston.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Ariel',
                lastName: 'Roitman',
                position: 'Vice President, ODB',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ArielRoitman.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Michael',
                lastName: 'Graf',
                position: 'Vice President, ASG',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MichaelGraf.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Nei',
                lastName: 'Dalvie',
                position: 'Former President, MARS',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NeilDalvie.jpg'
            },


            {
                className: 'highlight',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.'
            },

            {
                className: 'endorsement',
                firstName: 'Ronak',
                lastName: 'Patel',
                position: 'President, Points for a Purpose',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/RonakPatel.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Maroua',
                lastName: 'Sallami',
                position: 'Vice President, ODB',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MarouaSallami.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Melody',
                lastName: 'Song',
                position: 'Vice President, ASG',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MelodySong.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Vicky',
                lastName: 'Ho',
                position: 'President, UPS',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/VickyHo.jpg'
            },


            {
                className: 'endorsement',
                firstName: 'Archit',
                lastName: 'Baskaran',
                position: 'President, Points for a Purpose',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ArchitBaskaran.jpg'
            },
            {
                className: 'endorsement',
                firstName: 'Luke',
                lastName: 'Bertolet',
                position: 'Vice President, ODB',
                image: 'https://unsplash.it/500/500?image=636'
            },
            {
                className: 'endorsement',
                firstName: 'Bryan',
                lastName: 'Berger',
                position: 'President, Points for a Purpose',
                image: 'https://unsplash.it/500/500?image=637'
            },
            {
                className: 'endorsement',
                firstName: 'Andrew',
                lastName: 'Green',
                position: 'Chief of Staff, ASG',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/AndrewGreen.jpg'
            },


            {
                className: 'endorsement',
                firstName: 'Emily',
                lastName: 'Shanker',
                position: 'Vice President of Standards, PHA',
                image: 'https://s3-us-west-2.amazonaws.com/campaignwebsite/team/EmilyShanker.jpg'
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
