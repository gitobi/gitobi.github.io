'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:ProductsIndexCtrl
 * @description
 * # ProductsIndexCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('ProductsIndexCtrl', function ($scope, Product) {
    $scope.products = Product.index();
  });
