"use strict";
app.controller('EditEmployeeDetailsController', ['$scope', 'dataService', '$location', function($scope, dataService, $location) {
  //$scope.empDetails=angular.copy(dataService.getEmpData());
  // var employee = new Employee(dataService.getEmpData());
  // $scope.empDetails = employee.empDetails;
  $scope.empDetails = {};
  dataService.getEmpData().then(function(data) {
    $scope.empDetails = data;
  }, function(error) {
    console.log("Error fetching details" + error);
  });

  $scope.submitNewDetails = function(editEmpDetails) {
    // $scope.empDetails = angular.copy(dataService.setEmpData(editEmpDetails));

    dataService.setEmpData(editEmpDetails).then(function(data) {
      $scope.empDetails = data;
      console.log("Details updated successfully");
      $location.path('/');

    }, function(error) {
      console.log("Error updating details" + error);
    });
    $scope.editForm.$setPristine();
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