app.controller('transCtrl', ['$scope', function($scope) {


}]);

//works, but cannot contain inner content in markup
app.directive('message1', function(){
	return {
		templateUrl: '/transclusion/template1.html',
	}
});

//works and can contain inner content in markup
app.directive('message2', function(){
	return {
		templateUrl: '/transclusion/template2.html',
		transclude: true //in this case, it uses 'ng-transclude' in template
	}
});