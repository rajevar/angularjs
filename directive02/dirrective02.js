
app.controller('msg', ['$scope', function($scope) {

}]);

app.directive('message', function() {
    return {
        compile: function(elmt, attrs) {
            console.log("Compile Attrs: " + attrs.text);

           return {
                pre: function(scope, iElement, iAttrs) {
                    console.log("Pre Attrs: " + iAttrs.text);
                },
                post: function(scope, iElement, iAttrs) {
                    console.log("Post Attrs: " + iAttrs.text);
                }
           } 
        },
        controller: function($scope, $element, $attrs) {
            console.log("Controller Attrs: " + $attrs.text);
        }
    }
});