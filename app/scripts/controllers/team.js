'use strict';


angular.module('campaignWebsiteApp')
 	.controller('TeamCtrl', function ($rootScope, $scope, $route) {
    	$scope.awesomeThings = [
      		'HTML5 Boilerplate',
      		'AngularJS',
      		'Karma'
    	];

    	$rootScope.activeTab = $route.current.activeTab;


    	// Set up Masonry
      	var $container = $('ul.js-masonry');
    	$('ul.js-masonry').imagesLoaded(function() {
    		$container.masonry({
                columnWidth: 270,
                itemSelector: '.block',
    	  		gutter: 5,
    	  		isAnimated: true,
    		});
    	});

        // Endorsement list
        $scope.blocks = [
        	{
        		firstName: 'Nevil',
        		lastName: 'George',
        		image: 'https://unsplash.it/500/500?image=646'
        	},
        	{
        		firstName: 'Jon',
        		lastName: 'Rovira',
        		image: 'https://unsplash.it/500/500?image=647'
        	},
        	{
        		firstName: 'Cody',
        		lastName: 'Schiffer',
        		image: 'https://unsplash.it/500/500?image=648'
        	},
            {
                firstName: 'Chris',
        		lastName: 'Dayal',
                image: 'https://unsplash.it/500/500?image=649'
            },
            {
                firstName: 'Bryan',
        		lastName: 'Berger',
                image: 'https://unsplash.it/500/500?image=650'
            },
            {
                firstName: 'Chris',
        		lastName: 'Howard',
                image: 'https://unsplash.it/500/500?image=651'
            },
            {
        		firstName: 'Nevil',
        		lastName: 'George',
        		image: 'https://unsplash.it/500/500?image=652'
        	},
        	{
        		firstName: 'Jon',
        		lastName: 'Rovira',
        		image: 'https://unsplash.it/500/500?image=653'
        	},
        	{
        		firstName: 'Cody',
        		lastName: 'Schiffer',
        		image: 'https://unsplash.it/500/500?image=654'
        	},
            {
                firstName: 'Chris',
        		lastName: 'Dayal',
                image: 'https://unsplash.it/500/500?image=492'
            },
            {
                firstName: 'Bryan',
        		lastName: 'Berger',
                image: 'https://unsplash.it/500/500?image=493'
            },
            {
                firstName: 'Chris',
        		lastName: 'Howard',
                image: 'https://unsplash.it/500/500?image=494'
            },
            {
        		firstName: 'Nevil',
        		lastName: 'George',
        		image: 'https://unsplash.it/500/500?image=495'
        	},
        	{
        		firstName: 'Jon',
        		lastName: 'Rovira',
        		image: 'https://unsplash.it/500/500?image=496'
        	},
        	{
        		firstName: 'Cody',
        		lastName: 'Schiffer',
        		image: 'https://unsplash.it/500/500?image=497'
        	},
            {
                firstName: 'Chris',
        		lastName: 'Dayal',
                image: 'https://unsplash.it/500/500?image=498'
            },
            {
                firstName: 'Bryan',
        		lastName: 'Berger',
                image: 'https://unsplash.it/500/500?image=499'
            },
            {
                firstName: 'Chris',
        		lastName: 'Howard',
                image: 'https://unsplash.it/500/500?image=500'
            },
        ];
  	});
