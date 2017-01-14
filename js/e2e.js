"use strict";
var employeeE2E = angular.module('employeeE2E', ['employeeDetails', 'ngMockE2E']);
employeeE2E.run(function($httpBackend) {
  var employee = {
    "id": 1,
    "name": "Alice",
    "dob": "24 th June,1992",
    "gender": "Female"
  };
  $httpBackend.whenGET('/employee').respond(function(method, url, data) {
      return [200, employee, {}];
    });
  $httpBackend.whenPUT('/editEmployee').respond(function(method, url, data) {
    var editEmployee = angular.fromJson(data);
    if (editEmployee.id === employee.id) {
      employee = angular.copy(editEmployee);
      return [200, employee, {}];

    }
    //   phones.push(phone);
    //   return [200, phone, {}];
  });
  $httpBackend.whenGET(/partials/).passThrough(); // Requests for templates are handled by the real server

});