"use strict";
app.service("dataService", function($q, $http) {

  // var employeeData = {

    // name: "Alice",
    // dob: "24 th June,1992",
    // gender: "Female"
  // };
  this.getEmpData = function() {

    // return employeeData;
    var defer = $q.defer();
    $http.get("/employee")
      .success(function(response) {
        defer.resolve(response);
      })
      .error(function(error) {
        defer.reject(error);
      });
    return defer.promise;
  };
  this.setEmpData = function(setEmpDetails) {
    // employeeData = angular.copy(setEmpDetails);
    // return employeeData;
    var defer = $q.defer();
    $http.put("/editEmployee",setEmpDetails)
      .success(function(response) {
        defer.resolve(response);
      })
      .error(function(error) {
        defer.reject(error);
      });
    return defer.promise;
  
  };

});