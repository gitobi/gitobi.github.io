'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:ProductsShowCtrl
 * @description
 * # ProductsShowCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('ProductsShowCtrl', function ($rootScope, $scope, $routeParams, Product) {
    var productId = $routeParams.productId;
    $rootScope.pageTitle = productId;
    $scope.product = Product.get(productId);
  });
