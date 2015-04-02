'use strict';


angular.module('campaignWebsiteApp')
 	.controller('MediaGalleryCtrl', function ($rootScope, $scope, $route, $http, $sce) {


        // For nav panel active li's
    	$rootScope.activeTab = $route.current.activeTab;
    	

        $http.get('https://afternoon-atoll-8482.herokuapp.com/instagram')
            .success(function(data, status, headers, config) {
                $scope.instas = data;
            });

        $http.get('https://afternoon-atoll-8482.herokuapp.com/twitter')
            .success(function(data, status, headers, config) {
                $scope.tweets = data;
            });


        // Set up Masonry
        setTimeout(function() {
            var $container = $('main.listening ul.instagram-feed');
            $(window).resize(function() {
                var windWidth = $(window).width();
                $container.imagesLoaded(function() {
                    if (windWidth < 1150) {
                        var squareSide = $container.width();
                    }
                    else {
                        var squareSide = ($container.width() - (1*5)) / 2;
                    }
                    $container.masonry({
                        columnWidth: squareSide,
                        itemSelector: '.insta-item',
                        gutter: 5,
                        isAnimated: true,
                    });
                });
            }).resize();
        }, 1000);
    });
