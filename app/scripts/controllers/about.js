'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('AboutCtrl', function ($rootScope, $scope, Organization) {
    $rootScope.pageTitle = 'About';
    $scope.organization = Organization.get();
  });
