// Code goes here

angular.module('myApp', [])
	.controller('formCtrl', function($scope, $attrs) {
		$scope.countries = [
		    {name: "Antigua", code: "ag" },
		    {name: "Aruba", code: "aw" },
		    {name: "Burundi", code: "bi" },
		    {name: "Brunei", code: "bn" }
		];
    
    	$scope.log = function() {
    		console.log("countries: ", $scope.countries);
    	}

});