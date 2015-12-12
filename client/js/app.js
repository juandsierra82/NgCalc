//decided to use state routing to separate concerns and allow for cleaner code

angular.module('calculator', ['calculator.controller', 'ngRoute', 'ui.router', 'ngMaterial'])

.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('calculator', {
			templateUrl: 'views/calculator.html',
			url: '/',
			controller: 'Rendering'
		})

	$mdThemingProvider.theme('default')
		.primaryPalette('light-blue', {
			'default': '300',
			'hue-1': '100', 
      'hue-2': '600', 
      'hue-3': 'A100' 
		})

		.accentPalette('indigo', {
			'default': '300',
			'hue-1': '100', 
      'hue-2': '600', 
      'hue-3': 'A100' 
		})

		.backgroundPalette('blue-grey')
})

