'use strict';

/**
 * @ngdoc overview
 * @name campaignWebsiteApp
 * @description
 * # campaignWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('campaignWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/vision', {
        templateUrl: 'views/vision.html',
        controller: 'VisionCtrl'
      })
      .when('/endorsements', {
        templateUrl: 'views/endorsements.html',
        controller: 'EndorsementsCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/join-us', {
        templateUrl: 'views/join-us.html',
        controller: 'JoinCtrl'
      })
      .when('/we-are-listening', {
        templateUrl: 'views/listening.html',
        controller: 'ListeningCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
