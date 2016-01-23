'use strict';
angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl',
    activetab: 'contacts'
  });
}])

.controller('ContactsCtrl', ['$scope','$route','$http',function($scope, $http) {
/*	$scope.fullname = '';
	$scope.email = '';
	$scope.phone = '';
	$scope.message = '';*/
	$scope.pageTitle = 'contacts';
	$scope.contact = {};
	$scope.capcha = '';
	$scope.captcha1 = 15;
	$scope.captcha2 = 2

	//... TODO: try not to pass the scope
	$scope.submitForm = function() {		
		$http({
			method	: 'POST',
			url 	: 'https://getsimpleform.com/messages?form_api_token=24822f3f3891f1dbce3c4bb4b69f0590', 
			data	: $scope.contact,
			//type 	: 'jsonp', // not needed
			headers	: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.success(function(data){
			alert(data);
		});
	};

}]);
