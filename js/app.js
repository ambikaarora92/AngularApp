"use strict";
var app = angular.module('employeeDetails', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'partials/employeeDetails.html',
      controller: 'EmployeeDetailsController'
    })
    .when('/edit', {
      templateUrl: 'partials/editEmployeeDetails.html',
      controller: 'EditEmployeeDetailsController'
    });
}]);