/**
 * Created by miodrag on 18/11/2015.
 */
var DialogController =  function( $scope, $mdDialog) {
  $scope.hide = function () {
    $mdDialog.hide();
  };
  $scope.cancel = function () {
    $mdDialog.cancel();
  };
  $scope.answer = function (answer) {
    $mdDialog.hide(answer);
  };
};
twinsoftApp.controller('DialogController', DialogController);
