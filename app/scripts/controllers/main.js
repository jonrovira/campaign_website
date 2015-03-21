'use strict';

/**
 * @ngdoc function
 * @name campaignWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the campaignWebsiteApp
 */
angular.module('campaignWebsiteApp')
 	.controller('MainCtrl', function ($rootScope, $scope, $route) {
 		var i = 0,
 			videos = ["video/MVI_4038.mp4", "video/MVI_4039.mp4", "video/MVI_4040.mp4"],
 			// videos = [
 			// 	'https://nandc.firebaseapp.com/video/MVI_4038.mp4',
 			// 	'https://nandc.firebaseapp.com/video/MVI_4039.mp4',
 			// 	'https://nandc.firebaseapp.com/video/MVI_4040.mp4'
 			// ],
 			length = videos.length;
    	// $scope.currentVideo = videos[i];
    	var videoPlayer = document.getElementById('video-player');
    	videoPlayer.src = videos[i];
    	console.log(videoPlayer);
    	videoPlayer.addEventListener('ended', function() {
    		i++;
    		// $scope.currentVideo = videos[i % length];
    		this.src = videos[i % length];
    		console.log($scope.currentVideo);
    		this.play();
    	}, false);

    	$rootScope.activeTab = $route.current.activeTab;
  	})

 	.directive('resizemain', function ($window) {
	    return function (scope, element) {
	    	// Dynamic height
	    	setTimeout(function() {
	    		$('main.main').height($(window).height() - $('header').height());
	    		var videoHalfHeight = $('main.main video').height() * 0.5;
	    		$('main.main video').css('margin-top', '-' + videoHalfHeight + 'px');
	    	}, 500);

	        $(window).resize(function () {
	        	$('main.main').height($(window).height() - $('header').height());
	        	var mainHalfHeight = $('main.main video').height() * 0.5;
	        	$('main.main video').css('margin-top', '-' + mainHalfHeight + 'px');
	        });

	        // Banner fade in
	        setTimeout(function() {
	    		$('main.main div.banner').fadeIn(2000);
	    	}, 1200);
	    }
	});
