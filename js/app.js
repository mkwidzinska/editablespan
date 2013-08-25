var app = angular.module('editApp', []);

app.controller('editController', function($scope) {
  $scope.myText = "This is my text";

  $scope.onReady = function(value) {
    console.log("controller: edit ready, " + value)
  }
});

app.directive('editablespan', function() {
  return {
    restrict: 'E',
    template: '<div><span ng-hide="editing">{{text}}</span><form ng-show="editing"><input type="text"></form><div>',
    scope: {
      text: '=model',
      onReady: '&' 
    },
    replace: true,
    link: function(scope, element, attrs) {
      var span = angular.element(element.children()[0]);
      var form = angular.element(element.children()[1]);
      var input = angular.element(element.children()[1][0]);

      span.bind('click', function(event) {
        input[0].value = scope.text;
        startEdit();        
      });

      function startEdit() {
        bindEditElements();
        scope.editing = true;        
        scope.$apply();        
        input.focus();
      }

      function bindEditElements() {        
        input.bind('blur keyup', function(event) {
          if(!scope.editing) {
            return;
          }
          if(event.type == "keyup" && event.originalEvent.keyCode != 27) {
            return;
          }
          stopEdit();        
        });

        form.bind('submit', function() {
          save();
          stopEdit(); 
        });
      }

      function unbindEditElements() {
        input.unbind();
        form.unbind();        
      }

      function stopEdit() {
        unbindEditElements();
        scope.editing = false;
        scope.$apply();
      }

      function save() {
        scope.text = input[0].value;
        scope.$apply();
        scope.onReady();
      }
    }
  }
});

