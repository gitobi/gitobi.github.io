'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (parentPath) {
      var regex = new RegExp('^' + parentPath + '$');
      return $location.path().match(regex);
    };
  });
