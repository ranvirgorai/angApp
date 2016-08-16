var app=angular.module("ngAngExp",["ui.router"]);
/*
.run
.config
.factory
.controller
.value
.const
.provider
.service
*/

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state("app",{
			url:"",
			templateUrl :"template/main.html",
			controller: function($scope){
				$scope.name="Angular Test App";
			}

		});
	$urlRouterProvider.otherwise("/")
});
