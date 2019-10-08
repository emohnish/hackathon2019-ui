var app = angular.module("Kerboresclan_UI", []);


app.controller("Controller1", function($scope, $http) {
  $scope.message = "Hello, AngularJS";	

  $http({
        method: "GET",
        url: 'https://pythonflaskapp123.azurewebsites.net/api?input=Mohnish',
        headers: {'Content-Type': 'application/json;charset=UTF-8'}

  }).success(function(response) {
      $scope.messageFromServer = response.response.my_api_output
  }).error(function(response) {
    alert('Error');
  });


}); 