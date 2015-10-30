/**
 * @ngdoc object
 * @module twinsoftApp
 * @name twinsoftApp.controller:TeamController
 * @description
 * NavbarController is responsible for navigation and routing.
 * Confirmation pop up is opened in cases user try to init or delete : movies, TV shows and music and also after search
 * action for new content.
 */

twinsoftApp.controller('TeamController', function TeamController($scope) {
	/**
	 * @ngdoc property
	 * @name common.controller:NavbarController#items
	 * @propertyOf common.controller:NavbarController
	 * @description
	 * Defines list of menu items and attach them to $scope injected in controller.
	 */
	$scope.team = [
	    {name: 'Miodrag Pavković', title: 'CEO', img: 'app/images/team/miodrag.jpg', description: 'Full stack developer'},
	    {name: 'Miroslav Pavković', title: 'Technical Team Lead', img: 'app/images/team/miroslav.jpg', description: 'Java expert'},
      {name: 'Vania Toperich', title: 'Administrator', img: 'app/images/team/vanja.jpg', description: 'Linux and network expert'},
      {name: 'Radoslav Mirkov', title: 'Software Architect',  img: 'app//images/team/radojica.jpg', description: 'Java expert'},
      {name: 'Nemanja Karanović ', title: 'QA manager', img: 'app/images/team/nemanja.jpg', description: 'Senior tester developer'},
      {name: 'Aleksandar Saša Krompić', title: 'Software Developer', img: 'app/images/team/krompa.jpg', description: 'C# expert'},
	];
});
