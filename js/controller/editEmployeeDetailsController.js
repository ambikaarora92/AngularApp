"use strict";
app.controller('EditEmployeeDetailsController', ['$scope', 'dataService', '$location', function($scope, dataService, $location) {
  //$scope.empDetails=angular.copy(dataService.getEmpData());
  var employee = new Employee(dataService.getEmpData());
  $scope.empDetails = employee.empDetails;

  $scope.submitNewDetails = function(editEmpDetails) {
    editEmpDetails = angular.copy(dataService.setEmpData(editEmpDetails));
    $scope.editForm.$setPristine();
    $location.path('/');
  };
  $scope.cancelNewDetails = function() {
    $location.path('/');
  };
  $scope.$on("$locationChangeStart", function(event, next, current) {
    console.log("route change");
    if ($scope.editForm.$dirty) {
      var unsavedChange = confirm("Do you want to move back with unsaved changes?");
      if (unsavedChange) {
        $location.path("/");
      } else {
        event.preventDefault();
      }
    } else {
      $location.path("/");
    }
  });
}]);