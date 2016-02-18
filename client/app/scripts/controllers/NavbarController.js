/**
 * @ngdoc object
 * @module twinsoftApp
 * @name twinsoftApp.controller:NavbarController
 * @description
 * NavbarController is responsible for navigation and routing.
 * Confirmation pop up is opened in cases user try to init or delete : movies, TV shows and music and also after search
 * action for new content.
 */

twinsoftApp.controller('NavbarController', function NavbarController($rootScope, $scope, $location, $mdSidenav,$mdDialog, $mdMedia, anchorSmoothScroll) {
	$scope.$location = $location;
        $rootScope.login = false;
	/**
	 * @ngdoc property
	 * @name common.controller:NavbarController#items
	 * @propertyOf common.controller:NavbarController
	 * @description
	 * Defines list of menu items and attach them to $scope injected in controller.
	 */
	$scope.items = [
	    //{path: 'main', title: 'Home', id :'home' },
//            {path: 'home.login', title: 'Login', id :'home.login', icon : 'app/images/social/svg/production/ic_people_outline_24px.svg' },
	    {path: 'about', title: 'About', id :'about', icon : 'app/images/action/svg/production/ic_info_24px.svg' },
	    {path: 'service', title: 'Services', id :'service', icon : 'app/images/action/svg/production/ic_loyalty_24px.svg'  },
	    {path: 'team', title: 'Team', id :'team', icon : 'app/images/social/svg/production/ic_people_outline_24px.svg' }
	];
	/**
	 * @ngdoc method
	 * @name ok
	 * @methodOf common.controller:NavbarController
	 * @description
	 * Method to check if link - menu item is active. Used in GUI to set appropriate class.
	 */
	$scope.isActive = function(item) {
	    if (item.path == $location.path()) {
	        return true;
	    }
	    return false;
	};
  $scope.gotoElement = function (eID){
    // set the location.hash to the id of
    // the element you wish to scroll to.
    //$location.hash('main');
    console.log("Eid", eID);
    if (eID == 'login') {
        $rootScope.login = true;
    } else {
          // call $anchorScroll()
        $rootScope.login = false;
    $('html, body').animate({
      scrollTop: $("#"+ eID).offset().top
    }, 1000);
    }
  
   // anchorSmoothScroll.scrollTo(eID);

  };
    
  

    
});
