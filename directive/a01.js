//simple directive
var app = angular.module("app", []);

app.controller('emp', ['$scope', function($scope) {
	$scope.msg = 'This is a scope mssage';
}]);

app.directive('myInfoMsg', function() {
	return {
		templateUrl: 'my-info-msg.html' 
	};
});