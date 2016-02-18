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
  'ui.router', 'ngMaterial','ngMdIcons', 'ng-mfb', 'restangular','ngResource', 'ngRoute', 'ngFileUpload']).
  config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        views: {
          'main': {
            templateUrl: 'app/views/home/home.html',
            controller: 'HomeController',
          },
        
          'about': {
            templateUrl: 'app/views/about/about.html',
            controller: 'AboutController',
            onEnter: function () {
              $('html, body').animate({
                scrollTop: $("#about").offset().top
              }, 2000);
            }
          },
          'service': {
            templateUrl: 'app/views/services/services.html',
            onEnter: function () {
              console.log("On enter Services");
              $('html, body').animate({
                scrollTop: $("#service").offset().top
              }, 20000);
            }
            //controller: function($scope){ ... controller stuff just for tabledata view ... }
          },
          
          'team': {
            templateUrl: 'app/views/team/teamnew.html',
            controller: 'UserController as ul',
            onEnter: function () {
              console.log("On enter Team");
              $('html, body').animate({
                scrollTop: $("#team").offset().top -100
              }, 2000);
            }
          },
          
//          'login': {
//             templateUrl: 'app/views/home/login.html',
//             controller: 'LoginController as lc',
//            onEnter: function () {
//              console.log("On enter Team");
//              $('html, body').animate({
//                scrollTop: $("#team").offset().top -100
//              }, 2000);
//            }
//          }
        }

      })
      // nested list with corresponding data binding.
      .state('home.login', {
        url: '/login',
        templateUrl: 'app/views/home/login.html',
        controller: 'LoginController as lc',
         onEnter: function () {
              $('html, body').animate({
                scrollTop: $("#about").offset().top
              }, 2000);
            }
      })
      .state('home.main', {
        url: '/main',
        templateUrl: 'app/views/home/main.html',
        controller: 'HomeController as hc'
      })
      .state('home.about', {
        url: '/about',
        templateUrl: 'app/views/team/user-about.html',
        controller: 'UserAboutController as ac'
      })
      .state('home.education', {
        url: '/education',
        templateUrl: 'app/views/team/user-education.html',
        controller: 'UserEducationController as ec'
      })
      .state('home.skills', {
        url: '/skills',
        templateUrl: 'app/views/team/user-skills.html',
        controller: 'UserSkillsController as sc'
      })
      .state('home.contact', {
        url: '/contact',
        templateUrl: 'app/views/team/user-contact.html',
        controller: 'UserContactController as cc'
      })
     


  // base url need to be set to point to django rest server
    RestangularProvider.setBaseUrl(twinsoftappconstants.serverAddress);
    //RestangularProvider.setRestangularFields({
    //  id: '_id.$oid'
    //});
    // In this case we are mapping the id of each element to the _id field.
    // We also change the Restangular route.
    // The default value for parentResource remains the same.
    RestangularProvider.setRestangularFields({
      id: '_id.$oid',
      route: "restangularRoute",
      selfLink: "self.href"
    });
    RestangularProvider.setRequestInterceptor(function (elem, operation) {
      RestangularProvider.setRequestSuffix('/');
      return elem;
    })

  })
  .config(function($mdThemingProvider, $mdIconProvider){
    console.log("Ia m providing icons")
    $mdIconProvider
      .defaultIconSet("app/images/team/svg/avatars.svg", 128)
      .icon("menu"       , "app/images/team/svg/menu.svg"        , 24)
      .icon("share"      , "app/images/team/svg/share.svg"       , 24)
      .icon("google_plus", "app/images/team/svg/google_plus.svg" , 512)
      .icon("hangouts"   , "app/images/team/svg/hangouts.svg"    , 512)
      .icon("twitter"    , "app/images/team/svg/twitter.svg"     , 512)
      .icon("phone"      , "app/images/team/svg/phone.svg"       , 512);
    // Extend the red theme with a few different colors
    var neonRedMap = $mdThemingProvider.extendPalette('red', {
      '500': 'ff0000'
    });
    var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });


    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('neonRed', neonRedMap);
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.definePalette('amazingPaletteName', {
      '50': 'ffebee',
      '100': 'ffcdd2',
      '200': 'ef9a9a',
      '300': 'e57373',
      '400': 'ef5350',
      '500': 'f44336',
      '600': 'e53935',
      '700': 'd32f2f',
      '800': 'c62828',
      '900': 'b71c1c',
      'A100': 'ff8a80',
      'A200': 'ff5252',
      'A400': 'ff1744',
      'A700': 'd50000',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('default')
      .primaryPalette('customBlue')
      .accentPalette('red');
    $mdThemingProvider.theme('docs-purple-green', 'default')
      .primaryPalette('purple')
      .accentPalette('green');
      //.dark();
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
    $mdThemingProvider.theme('docs-light', 'default')
      .primaryPalette('customBlue');
    $mdThemingProvider.theme('docs-neonRed', 'default')
      .primaryPalette('blue')
      .accentPalette('teal')
      .warnPalette('red')
      .backgroundPalette('light-green')
  }).run(["$templateCache", function($templateCache) {
    $templateCache.put("app/views/home/home.html")
    }]);
  //.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  //  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
  //    $location.hash($routeParams.scrollTo);
  //    $anchorScroll();
  //  });
  //});

//  config(['$routeProvider', '$provide', function ($routeProvider, RestangularProvider, $provide) {
  //
  //$routeProvider.when('/home', {templateUrl: '../views/home/home.html'})
  //  .when('/about', {templateUrl: '../views/about/about.html'})
  //  .when('/team', {templateUrl: '../views/team/team.html'})
  //  .when('/services', {templateUrl: '../views/services/services.html'})
  //  //.otherwise({redirectTo: '/home'});
  //;
//}]);
