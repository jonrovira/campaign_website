'use strict';


angular.module('campaignWebsiteApp')
 	.controller('TeamCtrl', function ($rootScope, $scope, $route) {
    	$scope.awesomeThings = [
      		'HTML5 Boilerplate',
      		'AngularJS',
      		'Karma'
    	];


        // Show active page in nav panel
    	$rootScope.activeTab = $route.current.activeTab;


        // Show loader while setting up masonry
        var promise = new Promise(function(resolve, reject) {

            // Set up Masonry
            var $container = $('ul.js-masonry');
            $('ul.js-masonry').imagesLoaded(function() {
                $container.masonry({
                    columnWidth: 260,
                    itemSelector: '.block',
                    gutter: 0,
                    isAnimated: true,
                });
            });

            if (true) {
                $('div.loader-container').hide();
            }
            else {
                console.log('fuck');
            }
        });
        promise.then(function(result) {
            console.log(result); // "Stuff worked!"
        }, function(err) {
            console.log(err); // Error: "It broke"
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
