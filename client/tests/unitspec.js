
//Unit testing factories
describe('Calculator Application', function() {
  beforeEach(module('calculator'));
	
	//testing factories

	describe('Calculator factories', function(){
		var Ops, Display;
		beforeEach(module('calculator.factories'));

		describe('Factory: Ops', function(){
			
			beforeEach(inject(function (_Ops_){
				Ops = _Ops_;
			}));
			
			it('should be able to perform basic math', function(){
				expect(Ops.add(1.2,1)).toBe(2.2);
				expect(Ops.minus(1,1)).toBe(0);
				expect(Ops.multiply(-.5,2)).toBe(-1);
				expect(Ops.divide(3,2)).toBe(1.5);
			});

			it('should customize division by zero', function(){
				expect(Ops.divide(3,0)).toBe('NaN');
			});
		});

		describe('Factory: Display', function(){

			beforeEach(inject(function (_Display_){
				Display = _Display_;
			}));

			it('should round floats to 4 decimal places', function(){
				expect(Display.round(1.333333)).toBe(1.3333);
				expect(Display.round(1/3)).toBe(.3333);
			});

			it('should truncate input when called, returning zero for calls greater than the string length with input 0' ,function(){
				expect(Display.backspace('-1.23')).toBe('-1.2');

				spyOn(Display, 'backspace').and.callThrough();

				var input = '123'

				for(var i = 0; i<5; i++){
					Display.backspace(input);
				}

				expect(Display.backspace.calls.count()).toEqual(5);

				var value;
				value = Display.backspace('0')
				expect(value).toBe('0');
			
			});		
		});
	});

  //testing controllers unit and integration

  describe('Calculator Controller', function(){
  	var $controller, Ops, Display;

  	beforeEach(inject(function(_$controller_, _Ops_, _Display_){
    $controller = _$controller_;
      Ops = _Ops_
  		Display = _Display_;
  	}));

  	describe('$scope.concat', function() {
  		var $scope, controller;

  		beforeEach(function(){
  			$scope = {};
  			$scope.result = {};
  			$scope.operations = {};

  			controller = $controller('Rendering', { $scope: $scope }, Ops, Display);
  		});
  		it('should coerce new strings as floats', function(){
  			$scope.result.current = '23';
  			spyOn($scope, 'concat').and.callThrough();
  			var input = ['1', '.', '0', '.', '2'];
  			for(var i = 0; i<input.length; i++){
  				$scope.concat(input[i])
  			}

  			expect($scope.result.current).toBe('231.02');
  			expect($scope.concat).toHaveBeenCalledWith('.');
  			
  		});

  		it('should allow for editing of string floats', function(){
  			$scope.result.current = '23';
  			spyOn($scope, 'concat').and.callThrough();
  			var input = ['1', '.', '0', '.', '3', '<=', '1', '.','<=', '<=', '.','1','1'];
  			for(var i = 0; i<input.length; i++){
  				$scope.concat(input[i])
  			}
  			expect($scope.result.current).toBe('231.11');
  			expect($scope.concat).toHaveBeenCalledWith('.');
  			expect($scope.concat).toHaveBeenCalledWith('3');
  		});  		
  	});

		describe('$scope.do', function(){
			var $scope, controller;

  		beforeEach(function(){
  			$scope = {};
  			$scope.result = {};
  			$scope.operations = {};

  			controller = $controller('Rendering', { $scope: $scope }, Ops, Display);
  		});

  		it('should create an order of operations from left to right with new input', function(){

  			spyOn($scope, 'do').and.callThrough();

  				$scope.result.memory = 25;
  				$scope.result.current;
  				var nums = ['1','1','5','5'];
  				var ops = ['-','+','/','*','='];

  			for(var i = 0; i<ops.length;i++){
  				$scope.do(ops[i]);
  				$scope.result.current = nums[i];
  			}
  			expect(typeof $scope.result.memory).toBe('number');
  			expect($scope.result.memory).toBe(25);
  			expect($scope.do.calls.count()).toBe(5);

  		});

		});
	});
});