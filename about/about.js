'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutCtrl',
    activetab: 'about'
  });
}])

.controller('AboutCtrl', ['$scope', function($scope) {
	$scope.pageTitle = 'about';	
}]);