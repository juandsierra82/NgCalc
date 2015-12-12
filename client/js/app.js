//decided to use state routing to separate concerns and allow for cleaner code

angular.module('calculator', ['calculator.controller', 'ngRoute', 'ui.router', 'ngMaterial'])

.config(function ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('calculator', {
			templateUrl: 'views/calculator.html',
			url: '/',
			controller: 'Rendering'
		})

})

