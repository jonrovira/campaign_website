'use strict';


angular.module('campaignWebsiteApp')
	.controller('headerCtrl', function ($scope, $http, $window, $location) {

		// used to hide header when viewing splash page
		$scope.$on('$routeChangeStart', function() {
			$scope.currentRoute = $location.path();
		});

		$scope.toggleMenu = function(e) {
			$scope.sayClicked = false;
			$scope.joinClicked = false;
			$('header ul.controls li').removeClass('active');
			var $menu = $('header div.small-width ul.nav-menu');
			if ($menu.hasClass('active')) { $menu.slideUp(); }
			else { $menu.slideDown(); }
			$menu.toggleClass('active');
		}

		$scope.joinClicked = false;
		$scope.joinClick = function(e) {
			var className = e.target.className;
			if (className.indexOf('click-action') <= -1) {
				return;
			}
			$scope.sayClicked = false;
			$('header ul.controls li.say').removeClass('active');
			switch($scope.joinClicked) {
				case false:
					$('header ul.controls li.join').addClass('active');
					$scope.joinClicked = true;
					break;
				case true:
					$('header ul.controls li.join').removeClass('active');
					$scope.joinClicked = false;
					break;
			}
		};
		$scope.sayClicked = false;
		$scope.sayClick = function(e) {
			var className = e.target.className;
			if (className.indexOf('click-action') <= -1) {
				return;
			}
			$scope.joinClicked = false;
			$('header ul.controls li.join').removeClass('active');
			switch($scope.sayClicked) {
				case false:
					$('header ul.controls li.say').addClass('active');
					$scope.sayClicked = true;
					break;
				case true:
					$('header ul.controls li.say').removeClass('active');
					$scope.sayClicked = false;
					break;
			}
		};


		// Send contact email
		$scope.sendEmail = function(firstName, lastName, emailAddress, messageText) {
			if (typeof emailAddress === 'undefined') {
				return;
			}
			var email = {
				name: firstName + ' ' + lastName,
				from: emailAddress,
				text: messageText
			};
			$http.post('https://afternoon-atoll-8482.herokuapp.com/feedback', email).
				success(function(data, status, headers, config) {
					var $el = $('div.signed button');
					if (data) {
						$el.html('Thank you');
						$el.css('background-color', '#2F9849');
						$el.css('border-color', '#2FB149');
					} else {
						$el.html('Uh oh. Something went wrong.');
						$el.css('background-color', '#BD493E');
						$el.css('border-color', '#FF6354');
					}
				}).
				error(function(data, status, headers, config) {
					console.log('Error occurred ' + data);
				});
		};


		// Download images
		$scope.openPictures = function() {
			$window.open('https://s3-us-west-2.amazonaws.com/campaignwebsite/images/ProfilePic.jpg', '_blank');
			$window.open('https://s3-us-west-2.amazonaws.com/campaignwebsite/images/CoverPhoto.jpg', '_blank');
		};

	});
