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
    
    /**
     * [init intialize the application]
     * @return {[nothing]}
     */
    var init = function init(){
    	$scope.faces = face.faces;
    	$scope.clearPerson()
    }
    /**
     * [saveNewPerson add new person to faces API]
     * @return {[null]}
     */
    $scope.saveNewPerson = function saveNewPerson(){
    	face.faces.$add($scope.newPerson);
    	$scope.clearPerson();
    }
    /**
     * [clearPerson create newPerson and clear preexiting object ]
     * @return {[null]}
     */
    $scope.clearPerson = function clearPerson(){
    	$scope.newPerson = {
	    	name: '',
	    	description: '',
	    	imageUrl: ''
    	}
    }


    init();
  });
