"use strict";
app.controller('EmployeeDetailsController', ['$scope', 'dataService', '$location', function($scope, dataService, $location) {
  var employee = new Employee(dataService.getEmpData());
  $scope.empDetails = employee.empDetails;
  //	$scope.empDetails=angular.copy(dataService.getEmpData());
  //	dataService.getEmpData().then(function(data){
  //	$scope.empDetails=data;
  //	},function(error){
  //	console.log("Error fetching details"+error);
  //	});

  $scope.editDetails = function(editPath) {
    $location.path(editPath);
  };
}]);