'use strict';

/**
 * @ngdoc service
 * @name facesofHistoryApp.face
 * @description
 * # face
 * Service in the facesofHistoryApp.
 */
angular.module('facesofHistoryApp')
  .service('face', function ($firebaseArray, $rootScope) {
    var face = this;

    face.ref = new Firebase($rootScope.endpoint);

    face.faces = $firebaseArray(face.ref);

    return face;
  });
