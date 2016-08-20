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
			url:"/",
			templateUrl :"template/main.html",
			controller: function($scope){
				$scope.name="Angular Test App Home";
					}
				})
		.state("about",{
			url:"/about",
			templateUrl :"template/about.html",
			controller: function($scope){
				$scope.name="About Page";
					}
		})

		.state("about.me",{
			url:"/me",
			templateUrl :"template/about-me.html",
			controller: function($scope){
				$scope.name="My Page";
					}
		})

		.state("about.me.list",{
			url:"/list",
			template:"<br>{{name}}</br>",
			controller: function($scope){
				$scope.name="My List";
					}
		});



 	$urlRouterProvider.otherwise("/")
});
