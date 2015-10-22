'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
var yeomanApp = angular.module('yeomanApp', [
  'ngRoute']).
config(['$routeProvider', '$provide', function ($routeProvider, RestangularProvider, $provide) {

  $routeProvider.when('/home', {templateUrl: 'views/home/home.html'})
    .when('/about', {templateUrl: 'views/about/about.html'})
    .when('/team', {templateUrl: 'views/team/team.html'})
    .when('/services', {templateUrl: 'views/services/services.html'})
    .otherwise({redirectTo: '/home'});
  ;
}]);
