/**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  //function UserController( userService, $mdSidenav, $mdBottomSheet, $log ) {

  twinsoftApp.controller('UserController', function UserController($scope, $http,$timeout,$window, Upload, uploadService, userService, $mdSidenav, $mdBottomSheet, $mdDialog, $log, Restangular) {
    var self = this;
    $scope.adduser = false;
    self.selected     = null;
    self.users        = [ ];
    self.tags = [];
    $scope.myFile = "defaultImageUrl";
    self.selectUser   = selectUser;
    self.toggleList   = toggleUsersList;
    self.showContactOptions  = showContactOptions;
    userService
      .loadAllUsers(Restangular)
      .then( function( users ) {
        self.users    = [].concat(users);
        self.selected = users[0];
      });

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( user ) {
      self.selected = angular.isNumber(user) ? $scope.users[user] : user;
      self.toggleList();
      $scope.adduser = false;
    }
    /**
     * Show the bottom sheet
     */
    function showContactOptions($event) {
      var user = self.selected;

      return $mdBottomSheet.show({
        parent: angular.element(document.getElementById('content')),
        templateUrl: 'app/views/team/contactSheet.html',
        controller: [ '$mdBottomSheet', ContactPanelController],
        controllerAs: "cp",
        bindToController : true,
        targetEvent: $event
      }).then(function(clickedItem) {
        clickedItem && $log.debug( clickedItem.name + ' clicked!');
      });

      /**
       * Bottom Sheet controller for the Avatar Actions
       */
      function ContactPanelController( $mdBottomSheet ) {
        this.user = user;
        this.actions = [
          { name: 'Phone'       , icon: 'phone'       , icon_url: 'app/images/team/svg/phone.svg'},
          { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'app/images/team/svg/twitter.svg'},
          { name: 'Google+'     , icon: 'google_plus' , icon_url: 'app/images/team/svg/google_plus.svg'},
          { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'app/images/team/svg/hangouts.svg'}
        ];
        this.submitContact = function(action) {
          $mdBottomSheet.hide(action);
        };
      }
    }
    $scope.showTabDialog = function(ev) {
      $scope.adduser = true;
      //$mdDialog.show({
      //    controller: DialogController,
      //    templateUrl: 'app/views/team/userDialog.html',
      //    parent: angular.element(document.body),
      //    targetEvent: ev,
      //    clickOutsideToClose:true
      //  })
      //  .then(function(answer) {
      //    $scope.status = 'You said the information was "' + answer + '".';
      //  }, function() {
      //    $scope.status = 'You cancelled the dialog.';
      //  });
    };

    $scope.addUser = function(user) {
      console.log("AddUser user", user);
      console.log("AddUser user", $scope.myFile);
      userService
      .addUser(Restangular, user)
      .then( function( ) {
        console.log("AddUser user successfully!", user);
        userService
          .loadAllUsers(Restangular)
          .then( function( users ) {
            self.users    = [].concat(users);
            self.selected = users[0];
          });
      });
    }
    $scope.deleteUser = function(user) {
      console.log("deleteUser user", user);
      userService
        .deleteUser(Restangular, user);
      userService
        .loadAllUsers(Restangular)
        .then( function( users ) {
          self.users    = [].concat(users);
          self.selected = users[0];
        });
        //.then( function( user ) {
        //  console.log("deleteUser user successfully!", user);
        //});
    }
    $scope.uploadPic = function(file) {

      // upload on file select or drop
        Upload.upload({
          url: 'api/users/profile',
          data: {file: file, 'username': $scope.username}
        }).then(function (response) {
          $timeout(function () {
            file.result = response.data;
            console.log("upload $scope.myfile", $scope.myfile );
            $scope.myfile = file;
            console.log("upload 2 $scope.myfile", $scope.myfile );
          });
          //console.log('Success ' + response.config.data.file.name + 'uploaded. Response: ' + response.data);
          //$scope.errorMsg = response.status + ': ' + response.data;
        }, function (response) {
          console.log('Error status: ' + resp.status);
          if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;

        }, function (evt) {
          // Math.min is to fix IE which reports 200% sometimes
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          file.progress = progressPercentage;

          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
      };

    $scope.showHints = true;
    
    'use strict';
$('input[type="password"]').on('focus', function () {
    $('*').addClass('password');
}).on('focusout', function () {
    $('*').removeClass('password');
});
;
  });


