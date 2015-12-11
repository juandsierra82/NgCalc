angular.module('calculator.controller', ['calculator.services'])

.controller('Rendering', function ($scope, Ops, Display){
	$scope.displayed = '0';
	
	$scope.result = {};
	$scope.result.memory = "";
	$scope.result.current = "";
	$scope.result.total = "";

	$scope.keyboard = {
		numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
		operations: ['+', '-', '/', '*', '+/-', '=', 'CE', '<-'],
		decimal: '.'
	}
	$scope.concat=function(value){
		$scope.result.current+=value;
	}
})