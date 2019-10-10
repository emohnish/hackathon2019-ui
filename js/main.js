var app = angular.module("Kerboresclan_UI", ['ngAnimate', 'ngTouch', 'ngRoute', 'toastr']);

app.config(['$locationProvider', '$routeProvider',

function config($locationProvider, $routeProvider)  {
  $routeProvider.
    when('/main', { template: '<main-page></main-page>'}).
    when('/dashboard', { template: '<dashboard-page></dashboard-page>'}).
    otherwise('/main');
}
]).config(function(toastrConfig) {
  angular.extend(toastrConfig,  {
    preventOpenDuplicates: true,
    closeButton: true
  })
});

app.controller("Controller1", function($scope, $http, $window, $location, toastr)  {
  $scope.message = "Hello, AngularJS. Version 6";
  $scope.loginpage = {};	

  $scope.signIn = function() {

    //toastr.success('Authenticated Successfully. Navigating to Dashboard.');
    //$location.path('/dashboard');
  
    /*$http({
      method: "GET",
      url: 'https://kerbclansvc.azurewebsites.net/login?userName=' + $scope.loginpage.userName + '&password=' + $scope.loginpage.password,
      headers: {'Content-Type': 'application/json;charset=UTF-8'}//,
      //data: { userName: $scope.loginpage.userName, password: $scope.loginpage.password}
   }).success(function(response) {
        $scope.authenticate = response.response.authenticate;
        alert('Message from server: ' + $scope.authenticate);
        //$window.location.href = '/dashboard.html';

        if ($scope.authenticate == false) {
          toastr.error('Not Authenticated. Either UserName doesnt exist or Password is incorrect.');
          return;
        }

        toastr.success('Authenticated Successfully. Navigating to Dashboard.');
        $location.path('/dashboard');
    }).error(function(response) {
      alert('Error');
    });*/
  }

  


}); 