'use strict';

/**
 * @ngdoc directive
 * @name jamesApp.directive:productsList
 * @description
 * # productsList
 */
angular.module('jamesApp')
  .directive('productsList', function () {
    return {
      templateUrl: '/partials/products/list.html',
      restrict: 'E',
      scope: {
        products: '='
      }
    };
  });
