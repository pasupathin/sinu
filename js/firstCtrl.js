var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope){
            $scope.firstName = "Jhon";
            $scope.lastName = "Doe";
});
// app.directive("w3TestDirective", function() {
//     return {
//         template: "I was made in a directine constructor!"
//     };
// });