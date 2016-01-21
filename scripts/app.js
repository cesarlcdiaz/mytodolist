angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {

  $scope.learningNgChange = function() {

    console.log("hello world message");
    
  };

  $scope.todos = [

  {"name": "clean the house"},
  {"name": "pay the bills"},
  {"name": "feed the dog"},
  {"name": "water the plants"},
  {"name": "change the lights"},
  {"name": "work on projects"},
  {"name": "get Money!"}

  ]
});