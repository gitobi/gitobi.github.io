'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('ContactCtrl', function ($rootScope, $scope) {
    $rootScope.pageTitle = 'Contact';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
