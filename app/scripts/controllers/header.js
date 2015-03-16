'use strict';


angular.module('campaignWebsiteApp')
	.controller('headerCtrl', function ($scope, $http) {

		$scope.joinClicked = false;
		$scope.sayClicked = false;
		$scope.joinClick = function(e) {
			var className = e.target.className;
			if (className.indexOf("click-action") <= -1) {
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
		}
		$scope.sayClick = function(e) {
			var className = e.target.className;
			if (className.indexOf("click-action") <= -1) {
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
		}

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
					console.log(data);
				}).
				error(function(data, status, headers, config) {
					console.log('Error occurred ' + data);
				});
		}
	})
