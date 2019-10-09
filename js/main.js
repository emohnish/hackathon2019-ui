var app = angular.module("Kerboresclan_UI", ['ngAnimate', 'ngTouch', 'ngRoute']);

app.config(['$locationProvider', '$routeProvider',

function config($locationProvider, $routeProvider)  {
  $routeProvider.
    when('/main', { template: '<main-page></main-page>'}).
    when('/dashboard', { template: '<dashboard-page></dashboard-page>'}).
    otherwise('/main');
}

]);

app.controller("Controller1", function($scope, $http, $window)  {
  $scope.message = "Hello, AngularJS";	

  $http({
        method: "GET",
        url: 'https://pythonflaskapp123.azurewebsites.net/api?input=Mohnish',
        headers: {'Content-Type': 'application/json;charset=UTF-8'}

  }).success(function(response) {
      alert($scope.messageFromServer);
      $scope.messageFromServer = response.response.my_api_output;
      //$window.location.href = '/dashboard.html';
  }).error(function(response) {
    alert('Error');
  });


}); 