angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

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
})
.service('dataService', function() {

  this.helloConsole = function() {
    console.log("hello console testing")
  }

});