'use strict';

/**
 * @ngdoc overview
 * @name errandApp
 * @description
 * # errandApp
 *
 * Main module of the application.
 */
angular
  .module('errandApp', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ui.router'
  ])

.config( function( $stateProvider , $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state("index",{
			url:"/",
			templateUrl:"views/index.html",
			//controller:'MainCtrl'
		})
		.state("login",{
			url:"/login",
			templateUrl:"views/login.html",
			//controller:'MainCtrl'
		})
		.state("member",{
			url:"/member",
			templateUrl:"views/member.html",
			//controller:'MainCtrl'
		})
		.state("member.delivery",{
			url:"/delivery",
			templateUrl:"views/member.delivery.html"
			//controller:"Ctrl"
		})
		.state("member.grocery",{
			url:"/grocery",
			templateUrl:"views/member.grocery.html",
			controller:"memberGroceryCtrl"
		})
		;
		
			

});
