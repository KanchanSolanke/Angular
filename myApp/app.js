var app = angular.module('todos', ['ui.bootstrap']);
app.controller('myCtrl', function ($scope) {
//     $scope.selectedvalue = [],
        $scope.filteredTodos = []
        ,$scope.currentPage = 1
        ,$scope.numPerPage = 10
        ,$scope.maxSize = 5,
        $scope.pagelist = [5, 10, 20, 25],
        $scope.selectedName = 10;
        $scope.makeTodos = function() {
          $scope.todos = [];
          for (i=1;i<=25;i++) {
            $scope.todos.push({ text:'todo '+i, done:false});
          }
        };
        $scope.makeTodos();
    $scope.todos = [
        { name: 'Kanchan Solanke', country: "India" },
        { name: 'Thomas jeff', country: "UK" },
        { name: 'Ken joe', country: "US" },
        { name: 'Abhijit Jawanjal', country: "India" },
        { name: 'Alfa johny', country: "UK" },
        { name: 'Manisha Solanke', country: "India" },
        { name: 'Jeff', country: "UK" },
        { name: 'Chris', country: "Australia" },
        { name: 'Scarlet', country: "US" },
        { name: 'Tommy', country: "UK" },
        { name: 'Shimg chi', country: "China" },
        { name: 'Bravo', country: "West-Indies" },
        { name: 'Jen', country: "US" },
        { name: 'Neha', country: "India" },
        { name: 'Vishal', country: "India" },
        { name: 'Thomas', country: "Australia" },
        { name: 'Jiya', country: "India" },
        { name: 'Shung', country: "Korea" },
        { name: 'Liam', country: "Australia" },
        { name: 'Nisha', country: "India" },
        { name: 'Sagar', country: "India" },
        { name: 'David', country: "US" },
        { name: 'Piya', country: "India" },
        { name: 'Ankit', country: "India" },
        { name: 'Jonas', country: "Japan" }
    ];

    $scope.$watch('currentPage + numPerPage', function() {
     var begin = (($scope.currentPage - 1) * $scope.numPerPage)
     , end = begin + $scope.numPerPage;
    
     $scope.filteredTodos = $scope.todos.slice(begin, end);
   });  
  
   $scope.changePages = function(num) {
  $scope.numPerPage = num;
  $scope.currentPage = 1;
   }
 });


 
 