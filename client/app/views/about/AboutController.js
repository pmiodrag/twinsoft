/**
 * Created by miodrag on 29/11/2015.
 */
twinsoftApp.controller('AboutController', function AboutController($anchorScroll, $scope, $location,  $routeParams) {
  $location.hash($location.hash());
  $anchorScroll();
});
