
/**
 * Created by miodrag on 29/11/2015.
 * @ngdoc object
 * @module twinsoftApp
 * @name twinsoftApp.controller:NavbarController
 * @description
 * NavbarController is responsible for navigation and routing.
 * Confirmation pop up is opened in cases user try to init or delete : movies, TV shows and music and also after search
 * action for new content.
 */

twinsoftApp.controller('HomeController', function HomeController($anchorScroll, $scope, $location) {
//    $scope.login = false;
    $scope.gotoAnchor = function(x) {
      console.log("Click anchor x :", x);
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('anchor' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
});
