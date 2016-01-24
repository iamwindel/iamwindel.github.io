//'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngAnimate',
  'ngRoute',
  'myApp.home',
  'myApp.about',
  'myApp.adventures',
  'myApp.contacts',
  'myApp.version'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])

.controller('navigationCtrl', ['$scope','$route','$window', function($scope, $route, $window) {
	$scope.$route = $route;	
}])

.directive('gotop', ['$window','$route',function($window,$route) {
  return function(scope, element, attrs) {
      angular.element($window).bind('scroll', function() {
        var scrollOffset = this.pageYOffset;
        if (scrollOffset >= 100) {
          element.show();
        } else {
          element.hide();
        };
      })

      element.bind('click',function(){
        $window.scrollTo(0,0);
      })

    };
}])
