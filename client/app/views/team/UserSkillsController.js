/**
 * Created by miodrag on 03/02/2016.
 */
twinsoftApp.controller('UserSkillsController', function UserSkillsController($scope, userService) {
 
    /**
   * @ngdoc property
   * @name team.controller:SkillsController#title
   * @propertyOf team.controller:SkillsController
   * @description
   * Defines list of menu items and attach them to $scope injected in controller.
   */
    $scope.title = 'Skills';
    $scope.tags = [];
});
