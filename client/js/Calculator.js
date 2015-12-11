angular.module('calculator.services', [])

.factory('Ops', Ops)

.factory('Display', Display)

//basic operations
function Ops (){
		
		function add(a, b){
			return a+b;
		}

		function minus(a, b){
			return a-b;
		}

		function multiply(a, b){
			return a*b;
		}

		function divide(a, b){
			if(b === '0') return 'NaN';
			return a/b;
		}

		function negate(a){
			return -a;
		}

		function clear(str){
			return '0';
		}

	return {
		add: add,
		minus: minus,
		multiply: multiply,
		divide: divide,
		negate: negate
	}
}

function Display (){
		
	function round(str){
		if(str.indexOf('.') === -1)
			return str;

		var rounded = ''; 
		var strArr = str.split('.');
		rounded =+ str[0] + strArr[1].slice(0, 5);
		return rounded;
		}

	function backspace(str){
		return str.substring(0, str.length-1);
	}

	return {

		round: round,
		backspace: backspace
	}
}