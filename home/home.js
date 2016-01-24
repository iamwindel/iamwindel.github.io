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


.directive('homer', ['$window','$route',function($window,$route) {
  return function(scope, element, attrs) {   

      animateStart();

      $(document).ready(function() {
        $(".projthumb").on("click", function() {
          var self = this;
           $('#imagepreview').attr('src', $(self).attr('href'));
           $('#imagemodal').modal('show');         
           return false;
        });
      });

      function animateStart(){
      	//console.log("home.js bindings: animateStart");
      	initializeAnimation();

        setTimeout(function() {
        	animateHome();
			angular.element($window).bind('scroll.home', function() {
				animateHome();
			})        	
        }, 500);
      }

      function initializeAnimation(){
        $("#noi").addClass("disappear");
        $("#homeColumn1").addClass("homeColumn1Start");
        $("#homeColumn2").addClass("homeColumn2Start");
        $("#homeColumn3").addClass("homeColumn3Start");
		    $("#featured2").addClass("featuredStart");
		    $("#featured2").addClass("featuredStart");
        $("#proj1").addClass('proj1Start');
        $("#proj2").addClass('proj2Start');
        $("#proj3").addClass('proj3Start');
        $("#proj4").addClass('proj4Start');
        $("#proj5").addClass('proj5Start');
        $("#proj6").addClass('proj6Start');
        $("#proj7").addClass('proj7Start');
        $("#proj8").addClass('proj8Start');      	
      }

      function animateHome(){
        var col1 = $("#homeColumn1");
        var col2 = $("#homeColumn2");
        var col3 = $("#homeColumn3");        
        var featured = $('#featured2');
        var proj1 = $('#proj1');
        //console.log("home.js  window scroll.home called");

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
            window.scrollBy(0, 400);
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

            angular.element($window).unbind('scroll.home');
            
          }
        }
      }

    };  
}])
