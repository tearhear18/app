'use strict';

angular.module('errandApp')
  .controller('memberGroceryCtrl',['$scope','$rootScope', function( $scope, $rootScope ){
  		$rootScope.errandModal = true;
  		$scope.create_cart = function(){
  			$rootScope.errandModal = true;
  		}
  		$scope.closeX = function(){
  			$rootScope.errandModal = false;
  		}
  }]);