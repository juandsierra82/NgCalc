angular.module('calculator.controller', ['calculator.services'])

.controller('Rendering', function ($scope, Ops, Display){

//calculator variables
	$scope.result = {};
	$scope.result.memory = null;
	$scope.result.current = ""
	$scope.result.total = "0"

	$scope.operation = {}
	$scope.operation.pending = null;
	$scope.operation.current = null;

//keyboard object
	$scope.keyboard = {
		numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'],
		operations: ['+', '-', '/', '*', '=', 'CE']
	}
//app functions
//display
	$scope.concat=function(value){

		if(value === '.' && $scope.result.current.indexOf('.') > -1){
			return ;
		}
		$scope.result.current+=value;	
	}

//keyboard behavior

	$scope.do=function(value){		
	//operation sets memory if non is set, and remembers operand

	//once a new number is starting to type, total becomes memory

		if($scope.result.memory === null){
			$scope.result.memory = parseFloat($scope.result.current);
			$scope.operation.pending = value;
			$scope.result.current = Ops.clear();
		} else {

			if($scope.operation.pending === '+'){
				$scope.result.memory = Ops.add($scope.result.memory, parseFloat($scope.result.current));
			}
			
			if($scope.operation.pending === '-'){
				$scope.result.memory = Ops.minus($scope.result.memory, parseFloat($scope.result.current));
			}
		
			if($scope.operation.pending === '*'){
				$scope.result.memory = Ops.multiply($scope.result.memory, parseFloat($scope.result.current));
			}

			if($scope.operation.pending === '/'){
				$scope.result.memory = Ops.divide($scope.result.memory, parseFloat($scope.result.current));
			}

			$scope.result.memory = Display.round($scope.result.memory);

			if(value === 'CE'){
				$scope.result.memory = null;
				$scope.result.total = Ops.clear();
				return ;
			}

			if(value === '='){

				return ;
			}

			$scope.operation.pending = value;
			$scope.result.current = Ops.clear();
		}	

	}


})
