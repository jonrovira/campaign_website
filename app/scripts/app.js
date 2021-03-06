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
        templateUrl: 'views/partials/main.html',
        controller: 'MainCtrl',
        activeTab: 'main'
      })
      .when('/about', {
        templateUrl: 'views/partials/about.html',
        controller: 'AboutCtrl',
        activeTab: 'about'
      })
      .when('/plan', {
        templateUrl: 'views/partials/vision.html',
        controller: 'VisionCtrl',
        activeTab: 'vision'
      })
      .when('/issues', {
        templateUrl: 'views/partials/key-issues.html',
        controller: 'IssuesCtrl',
        activeTab: 'issues'
      })
      .when('/endorsements', {
        templateUrl: 'views/partials/endorsements.html',
        controller: 'EndorsementsCtrl',
        activeTab: 'endorsements'
      })
      .when('/team', {
        templateUrl: 'views/partials/team.html',
        controller: 'TeamCtrl',
        activeTab: 'team'
      })
      .when('/media-gallery', {
        templateUrl: 'views/partials/media-gallery.html',
        controller: 'MediaGalleryCtrl',
        activeTab: 'listening'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
