angular.module('calculator.controller', ['calculator.factories'])

.controller('Rendering', function ($scope, Ops, Display){

//calculator variables
	$scope.result = {};
	$scope.result.memory = null;
	$scope.result.current = ""

	$scope.operation = {}
	$scope.operation.pending = null;

//keyboard object
	$scope.keyboard = {
		numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '<='],
		operations: ['+', '-', '/', '*', '=', 'CE']
	}
//app functions
//display controls; concat gets called whenever a user clicks on a button
	$scope.concat=function(value){
	//checks to see if '.' has been entered
		if(value === '.' && $scope.result.current.indexOf('.') > -1){
			return ;
		}
	//allows for editing of input
		if(value === '<='){
			$scope.result.current = Display.backspace($scope.result.current);
			return ;
		}
		$scope.result.current+=value;	
	}

//keyboard behavior

	$scope.do=function(value){		
	//operation sets memory if non is set, and remembers operand

		if($scope.result.memory === null){
			$scope.result.memory = parseFloat($scope.result.current);
			$scope.operation.pending = value;
			$scope.result.current = Ops.clear();
		} else {

	//if there is a number in memory, the calculator then finishes the preceding operation

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

	//after preceding operation is done, memory is rounded off 
			$scope.result.memory = Display.round($scope.result.memory);

	//checks to see if the operation needs to be returned, pending continues unchanged
			if(value === '='){
				return ;
			}
	//value reassigned to pending, and the current input is cleared waiting for new user input
			$scope.operation.pending = value;
			$scope.result.current = Ops.clear();
	
	//checks to see if the memory needs clear
		if(value === 'CE'){
				$scope.result.memory = null;
				$scope.operation.pending = null;
				$scope.result.total = Ops.clear();
				return ;
			}
		}	

	}


})


