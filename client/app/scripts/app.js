'use strict';

/**
 * @ngdoc overview
 * @name twinsoftApp
 * @description
 * # twinsoftApp
 *
 * Main module of the application.
 */
var twinsoftApp = angular.module('twinsoftApp', [
  'ui.router']).
config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/home',
      templateUrl: 'app/views/home/home.html'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
    url: '/about',
    templateUrl: 'app/views/about/about.html'
  })
    .state('services', {
      url: '/services',
      templateUrl: 'app/views/services/services.html'
    })
    .state('team', {
      url: '/team',
      templateUrl: 'app/views/team/team.html'
    })
});
//  config(['$routeProvider', '$provide', function ($routeProvider, RestangularProvider, $provide) {
  //
  //$routeProvider.when('/home', {templateUrl: '../views/home/home.html'})
  //  .when('/about', {templateUrl: '../views/about/about.html'})
  //  .when('/team', {templateUrl: '../views/team/team.html'})
  //  .when('/services', {templateUrl: '../views/services/services.html'})
  //  //.otherwise({redirectTo: '/home'});
  //;
//}]);
