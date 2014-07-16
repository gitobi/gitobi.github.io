'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:ProductsShowCtrl
 * @description
 * # ProductsShowCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('ProductsShowCtrl', function ($scope, $routeParams, Product) {
    $scope.product = Product.get($routeParams.productId);
  });
