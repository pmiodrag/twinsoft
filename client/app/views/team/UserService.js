(function(){
  'use strict';

  angular.module('twinsoftApp')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){

    var users = [
      {name: 'Miodrag Pavković', avatar: 'svg-1', title: 'CEO', img: 'app/images/team/mio2.jpg', description: 'Full stack developer'},
      //{name: 'Miroslav Pavković', avatar: 'svg-2', title: 'Technical Team Lead', img: 'app/images/team/miroslav.jpg', description: 'Java expert'},
      //{name: 'Vania Toperich', avatar: 'svg-3', title: 'Administrator', img: 'app/images/team/vanja.jpg', description: 'Linux and network expert'},
      //{name: 'Radoslav Mirkov', avatar: 'svg-4', title: 'Software Architect',  img: 'app//images/team/radojica.jpg', description: 'Java expert'},
      //{name: 'Nemanja Karanović ', avatar: 'svg-5', title: 'QA manager', img: 'app/images/team/nemanja.jpg', description: 'Senior tester developer'},
      //{name: 'Aleksandar Krompić', avatar: 'svg-6', title: 'Software Developer', img: 'app/images/team/krompa.jpg', description: 'C# expert'},

    ];

    // Promise-based API
    return {
      loadAllUsers : function(Restangular) {
        // Simulate async nature of real remote calls
       // return $q.when(users);
        return Restangular.all(resourceObjects["getUsers"].endpoint).getList();
      },
      addUser : function(Restangular, user) {
        var params = {
          firstName: user.firstName,
          lastName : user.lastName,
          avatar: 'svg-1', // user.avatar,
          title:  user.title,
          img: 'app/images/team/mio2.jpg',
          description:  user.biography,
          active: true}
        return Restangular.one(resourceObjects["addUser"].endpoint).customPOST({}, '', params, '');
      },
      deleteUser : function (Restangular, user){
        var params = {
          id : user.id
        }
        Restangular.all(resourceObjects["deleteUser"].endpoint).customDELETE("", {id : user._id}).then(
          function (response) {
            // success
            console.log("Delete User Successs");
          },
          function (response) {
            // error
            console.log("Delete User Error");
          });
      }
    };
  }

})();
