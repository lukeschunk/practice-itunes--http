var myApp = angular.module("myApp", []);



myApp.controller("myController", ["$scope", "mainService", function($scope, mainService){
    
    $scope.test = "test";
    
}]);


function doubleFinder(str) {
    
    var arr = str.split("");
    for(var i = 0; i < arr.length; i++) {
        for(var j = i; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                
            }
        }
        
    }
    
}