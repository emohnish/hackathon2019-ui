var app = angular.module("Kerboresclan_UI", ['ngAnimate', 'ngTouch', 'ngRoute']);

app.config(['$locationProvider', '$routeProvider',

function config($locationProvider, $routeProvider)  {
  $routeProvider.
    when('/main', { template: '<main-page></main-page>'}).
    when('/dashboard', { template: '<dashboard-page></dashboard-page>'}).
    otherwise('/main');
}

]);

app.controller("Controller1", function($scope, $http, $window, $location)  {
  $scope.message = "Hello, AngularJS";
  $scope.loginpage = {};	

  $scope.signIn = function() {
    alert($scope.loginpage.userName);
    alert($scope.loginpage.password);

    $http({
      method: "POST",
      url: 'https://pythonflaskapp123.azurewebsites.net/login',
      headers: {'Content-Type': 'application/json;charset=UTF-8'},
      data: { userName: $scope.loginpage.userName, password: $scope.loginpage.password }
   }).success(function(response) {
        $scope.messageFromServer = response.response.my_api_output;
        alert($scope.messageFromServer);
        //$window.location.href = '/dashboard.html';
        //$location.path('/dashboard');
    }).error(function(response) {
      alert('Error');
    });
  }

  


}); 