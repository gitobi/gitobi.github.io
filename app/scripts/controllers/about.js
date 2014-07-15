'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.organization = {
      name: 'Gitobi LLC',
      foundedAt: '2014/07/31'
    };
  });
