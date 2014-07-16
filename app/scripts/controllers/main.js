'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('MainCtrl', function ($rootScope, $scope, Organization, Product) {
    $rootScope.pageTitle = 'Home';
    $scope.organization = Organization.get();
    $scope.products = Product.index();
  });
