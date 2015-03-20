'use strict';


angular.module('campaignWebsiteApp')
 	.controller('MediaGalleryCtrl', function ($rootScope, $scope, $route, $http, $sce) {


        // For nav panel active li's
    	$rootScope.activeTab = $route.current.activeTab;
    	

        // Instagram widget
    	$http.get('https://afternoon-atoll-8482.herokuapp.com/instagram')
    		.success(function(data, status, headers, config) {
    			var arr = [];
    			for (var i = 0; i < data.length; i++) {
    				arr.push($sce.trustAsHtml(data[i]));
    			}
    			$scope.instas = arr;
    		});


        // Set up Masonry
        setTimeout(function() {
            var $container = $('ul.instagram-feed');
            $container.imagesLoaded(function() {
                $container.masonry({
                    columnWidth: 240,
                    itemSelector: '.insta-item',
                    gutter: 10,
                    isAnimated: true,
                });
            });
        }, 4000);
    });
