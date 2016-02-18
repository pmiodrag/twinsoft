/**
 * Created by miodrag on 18/01/2016.
 */

twinsoftApp.service('uploadService', ['$http', function ($http) {
  this.uploadFileToUrl = function(file, uploadUrl){
    var fd = new FormData();
    fd.append('file', file);
    console.log("fd", file);
    $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      })
      .success(function(){
        console.log("Success", file);
        file.progress = 100;//Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      })
      .error(function(){
        console.log("Error", file);
      });
  };
}]);
