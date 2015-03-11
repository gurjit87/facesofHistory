'use strict';

/**
 * @ngdoc function
 * @name facesofHistoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the facesofHistoryApp
 */
angular.module('facesofHistoryApp')
  .controller('MainCtrl', function ($scope, face) {
    
    
    var init = function init(){
    	$scope.faces = face.faces;
    	$scope.clearPerson()
    }

    $scope.saveNewPerson = function saveNewPerson(){
    	face.faces.$add($scope.newPerson);
    	$scope.clearPerson();
    }

    $scope.clearPerson = function clearPerson(){
    	$scope.newPerson = {
	    	name: '',
	    	description: '',
	    	imageUrl: ''
    	}
    }


    init();
  });
