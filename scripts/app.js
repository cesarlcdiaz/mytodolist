angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.learningNgChange = function() {
    console.log("hello world message");
  };

  $scope.helloWorld = dataService.helloWorld;

dataService.getTodos(function(response) {
  console.log(response.data);
  $scope.todos = response.data;
});

$scope.deletedTodo = function(todo, $index) {
  dataService.deletedTodo(todo);
  $scope.todo.splice($index, 1);
};
})
.service('dataService', function($http) {
  this.helloWorld = function() {
    console.log("hello console testing");
  };

  this.getTodos = function(callback){ 
    $http.get('mock/todos.json')
  .then(callback)
 }

this.deleteTodo = function(todo) {
  console.log("the " + todo.name + " todo has been deleted!")
}

 this.saveTodo = function(todo) {
  console.log("the " + todo.name + " todo has been saved!");
 }
});