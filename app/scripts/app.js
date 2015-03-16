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
        controller: 'MainCtrl',
        activeTab: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        activeTab: 'about'
      })
      .when('/vision', {
        templateUrl: 'views/vision.html',
        controller: 'VisionCtrl',
        activeTab: 'vision'
      })
      .when('/endorsements', {
        templateUrl: 'views/endorsements.html',
        controller: 'EndorsementsCtrl',
        activeTab: 'endorsements'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        activeTab: 'team'
      })
      .when('/join-us', {
        templateUrl: 'views/join-us.html',
        controller: 'JoinCtrl',
        activeTab: 'join'
      })
      .when('/media-gallery', {
        templateUrl: 'views/listening.html',
        controller: 'ListeningCtrl',
        activeTab: 'listening'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
