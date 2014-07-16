'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('AboutCtrl', function ($scope, Organization) {
    $scope.organization = Organization.get();
  });
