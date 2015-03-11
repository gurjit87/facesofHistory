'use strict';

/**
 * @ngdoc overview
 * @name facesofHistoryApp
 * @description
 * # facesofHistoryApp
 *
 * Main module of the application.
 */
angular
  .module('facesofHistoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
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
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope){
    $rootScope.endpoint = 'https://facesofhistory.firebaseio.com/people';
  })
