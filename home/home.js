'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl',
    activetab: 'home'
  });
}])

.controller('HomeCtrl', ['$scope','$timeout','$window',function($scope, $timeout, $window) {
}])

/*.directive('scrollAnimate', function() {
	return {
		restrict: 'A',
	    link: function (scope, element, attrs) {
	        var raw = element[0];
	        console.log('loading directive');
	            
	        element.bind('scroll', function () {
	            console.log('in scroll');
	            console.log(raw.scrollTop + raw.offsetHeight);
	            console.log(raw.scrollHeight);
	            if (raw.scrollTop + raw.offsetHeight > raw.scrollHeight) {
	                scope.$apply(attrs.scrolly);
	            }
	        });
	    };
	};
);*/