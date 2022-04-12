console.log("app is : " + app);
app.controller("watchCtrl", ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;

    $scope.$watch('a', function(newValue, oldValue) {
        if (oldValue !== newValue) {
            console.log("a modified from: " +  oldValue + " to: " + newValue);
        }
    });

    $scope.$watch('b', function(newValue, oldValue) {
        if (oldValue !== newValue) {
            console.log("b modified from: " +  oldValue + " to: " + newValue);
            
        }
    });

    $scope.$watch('c', function(newValue, oldValue) {
        if (oldValue !== newValue) {
            console.log("c modified from: " +  oldValue + " to: " + newValue);
            $scope.a = $scope.a * 100;
        }
    });

    $rootScope.$watch(function() {
        console.log("rootscope:: digest iteration has started..")
    })
}])