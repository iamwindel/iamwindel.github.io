'use strict';
angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl',
    activetab: 'contacts'
  });
}])

.controller('ContactsCtrl', ['$scope','$route','$http',function($scope, $route, $http) {
/*	$scope.fullname = '';
	$scope.email = '';
	$scope.phone = '';
	$scope.message = '';*/
	$scope.pageTitle = 'contacts';
	$scope.contact = {};

	$scope.captcha1 = randomNumber(10, 15); // 15
	$scope.captcha2 = randomNumber(1, 5); //2

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

	//... TODO: try not to pass the scope
	$scope.submitForm = function() {
		debugger;
		if ($scope.captcha1 + $scope.captcha2 == $scope.captcha ) {		
			$http({
				method	: 'POST',
				url 	: 'https://getsimpleform.com/messages?form_api_token=24822f3f3891f1dbce3c4bb4b69f0590', 
				data	: $scope.contact,
				//type 	: 'jsonp', // not needed
				headers	: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data){
				alert("Message submitted. Thank you!");
			});
		}
	};

}]);
