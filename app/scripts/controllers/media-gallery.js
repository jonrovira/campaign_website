'use strict';


angular.module('campaignWebsiteApp')
 	.controller('MediaGalleryCtrl', function ($rootScope, $scope, $route, $http, $sce) {


        // For nav panel active li's
    	$rootScope.activeTab = $route.current.activeTab;
    	

        // Instagram widget
    	// $http.get('https://afternoon-atoll-8482.herokuapp.com/instagram')
    	// 	.success(function(data, status, headers, config) {
    	// 		var arr = [];
    	// 		for (var i = 0; i < data.length; i++) {
    	// 			arr.push($sce.trustAsHtml(data[i]));
    	// 		}
    	// 		$scope.instas = arr;
    	// 	});

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
            var $container = $('ul.instagram-feed');
            $container.imagesLoaded(function() {
                $container.masonry({
                    columnWidth: 320,
                    itemSelector: '.insta-item',
                    gutter: 10,
                    isAnimated: true,
                });
            });
        }, 500);
    });
