var app = angular.module('editApp', ['mk.editablespan']);

app.controller('editController', function($scope) {
  $scope.item = {description: "This is a new item"};
  $scope.message = "";

  $scope.onReady = function(item) {
    $scope.message = "controller: edit ready, item description: " + item.description;
  };
});