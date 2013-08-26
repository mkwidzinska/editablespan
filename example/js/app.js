var app = angular.module('editApp', ['mk.editablespan']);

app.controller('editController', function($scope) {
  $scope.myText = "This is my text";

  $scope.onReady = function(value) {
    console.log("controller: edit ready, " + value);
  };
});