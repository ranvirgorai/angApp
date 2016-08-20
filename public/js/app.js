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
	$stateProvider.caseInenitiveMatch=true;
	$stateProvider
		.state("app",{
			url:"/",
			templateUrl :"template/index.html",
			controller: ""
				})
		.state("home",{
			url:"/home",
			templateUrl :"template/home.html",
			controller: "homeCtrl"
				})
		.state("cources",{
			url:"/cources",
			templateUrl :"template/cources.html",
			controller: "courcesCtrl"
				})
			.state("students",{
			url:"/students",
			templateUrl :"template/students.html",
			controller: "studentsCtrl"
				})
 	$urlRouterProvider.otherwise("/")
})

			.controller('homeCtrl',function ($scope) {
			$scope.message="Home Page";
			})

			.controller('courcesCtrl',function ($scope) {
			$scope.cources=['VB','JAVA','ANGULAR','NODE','Python','Ruby','Java Script'];
			})

			.controller('studentsCtrl',function ($scope) {
			$scope.students=['Ravi','Rohit','Rahul','Soniya','Deepika'];
			})

			.controller("countryCtrl",function(){
				this.name="India";
			})

			.controller("stateCtrl",function(){
				this.name="Maharastra";
			})

			.controller("cityCtrl",function(){
				this.name="Mumbai";
			});
