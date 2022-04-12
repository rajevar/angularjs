//simple directive


app.controller('emp', ['$scope', function($scope) {
	$scope.msg = 'This is a scope mssage';
}]);

app.directive('myInfoMsg', function() {
	return {
		templateUrl: '/directive/my-info-msg.html' , 
		transclude: true
	};
});
