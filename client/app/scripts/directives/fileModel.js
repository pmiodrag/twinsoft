/**
 * Created by miodrag on 18/01/2016.
 */
twinsoftApp.directive('fileModel', ['$parse', function ($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

      element.bind('change', function(){
        scope.$apply(function(){
          modelSetter(scope, element[0].files[0]);
        });
      });
    }
  };
}]).directive('chooseFileButton', function() {
  return {
    restrict: 'E',
    link: function (scope, elem, attrs) {
      var button = elem.find('button');
      var input = elem.find('input');
      input.css({ display:'none' });
      button.bind('click', function() {
        input[0].click();
      });
    }
  };
});
