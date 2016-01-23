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
  $scope.aaa = 'aaaaaa';
}])

.directive('gotop', ['$window','$route',function($window,$route) {
  return function(scope, element, attrs) {   
      element.bind('click',function(){
        $window.scrollTo(0,0);
      })

      $(document).ready(function(){
        console.log("ready");
        setTimeout(function() {animateHome();}, 500);              
      })

      angular.element($window).bind('scroll', function() {
        var scrollOffset = this.pageYOffset;
        if (scrollOffset >= 100) {
          element.show();
        } else {
          element.hide();
        };
        animateHome();      
      })

      function animateHome(){
        if ($route.current.activetab != 'home') return;

        var col1 = $("#homeColumn1");
        var col2 = $("#homeColumn2");
        var col3 = $("#homeColumn3");        
        var featured = $('#featured2');
        var proj1 = $('#proj1');

        if (col2.hasClass('homeColumn2Start') ) {
          col2.removeClass('homeColumn2Start').addClass('endTransMid');
          col3.removeClass('homeColumn3Start').addClass('endTransFast');            
        }
        if (col1.hasClass('homeColumn1Start') ) {
          
          var isHomeColumn1 = (window.pageYOffset >= 100)
          if (isHomeColumn1) {
            col1.removeClass('homeColumn1Start').addClass('endTransSlow');
            setTimeout(function() {$("#noi").removeClass('disappear').addClass('appearSlow');}, 800);            
          }
        }

        if (featured.hasClass('featuredStart')) {
          var isReadyFeature = noiTools.isElementInViewport('featuredMarker');
          if (isReadyFeature){
            featured.removeClass('featuredStart').addClass('endTransFast');            
          }
        }

        if (proj1.hasClass('proj1Start') )
        {
          var isReadyProject = noiTools.isElementInViewport('proj4');
          if (isReadyProject){

            var proj2 = $('#proj2');
            var proj3 = $('#proj3');
            var proj4 = $('#proj4');
            var proj5 = $('#proj5');
            var proj6 = $('#proj6');
            var proj7 = $('#proj7');
            var proj8 = $('#proj8');          

            proj1.removeClass('proj1Start').addClass('endTransMid');
            proj2.removeClass('proj2Start').addClass('endTransSlow');
            proj3.removeClass('proj3Start').addClass('endTransMid');
            proj4.removeClass('proj4Start').addClass('endTransFast');
            proj5.removeClass('proj5Start').addClass('endTransFast');
            proj6.removeClass('proj6Start').addClass('endTransMid');
            proj7.removeClass('proj7Start').addClass('endTransFast');
            proj8.removeClass('proj8Start').addClass('endTransSlow');
          }
        }
      }

    };  
}])
