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
    $scope.awesomeThings = face.faces;
  });
