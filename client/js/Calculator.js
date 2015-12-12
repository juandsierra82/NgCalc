angular.module('calculator.services', [])

.factory('Ops', Ops)

.factory('Display', Display)

//basic operations
function Ops (){
		
		function add(a, b){
			return a+ b;
		}

		function minus(a, b){
			return a - b;
		}

		function multiply(a, b){
			return a*b;
		}

		function divide(a, b){
			if(b === 0) return 'NaN';
			return a/b;
		}

		function negate(a){
			return -a;
		}

		function clear(){
			return '0';
		}

	return {
		add: add,
		minus: minus,
		multiply: multiply,
		divide: divide,
		negate: negate,
		clear: clear,
	}
}

function Display (){
		

	function round(float){
		console.log('in display')
		return Math.round(float *10000)/10000;
	}
//added in backspace functionality
	function backspace(str){
		//prevents NaN input
		if(str === '0') return '0';
		return str.substring(0, str.length-1);;
	}

	return {

		round: round,
		backspace: backspace
	}


}