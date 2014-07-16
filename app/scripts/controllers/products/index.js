'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:ProductsIndexCtrl
 * @description
 * # ProductsIndexCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('ProductsIndexCtrl', function ($rootScope, $scope, Product) {
    $rootScope.pageTitle = 'Products';
    $scope.products = Product.index();
  });
