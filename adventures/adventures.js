'use strict';

angular.module('myApp.adventures', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adventures', {
    templateUrl: 'adventures/adventures.html',
    controller: 'AdventuresCtrl',
    activetab: 'adventures'
  });
}])

.controller('AdventuresCtrl', ['$scope', function($scope) {
	$scope.pageTitle = 'adventures';
}]);