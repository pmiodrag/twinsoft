/**
 * @ngdoc object
 * @module yeomanApp
 * @name yeomanApp.controller:NavbarController
 * @description 
 * NavbarController is responsible for navigation and routing.
 * Confirmation pop up is opened in cases user try to init or delete : movies, TV shows and music and also after search
 * action for new content.
 */

yeomanApp.controller('NavbarController', function NavbarController($scope, $location) {
	$scope.$location = $location;
	/**
	 * @ngdoc property
	 * @name common.controller:NavbarController#items 
	 * @propertyOf common.controller:NavbarController
	 * @description 
	 * Defines list of menu items and attach them to $scope injected in controller.
	 */
	$scope.items = [
	    {path: '/home', title: 'Home'},
	    {path: '/about', title: 'About'},
	    {path: '/services', title: 'Services'},
	    {path: '/contact', title: 'Contact'}
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
});
