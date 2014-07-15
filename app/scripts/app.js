'use strict';

/**
 * @ngdoc overview
 * @name jamesApp
 * @description
 * # jamesApp
 *
 * Main module of the application.
 */
angular
  .module('jamesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products/index.html',
        controller: 'ProductsIndexCtrl'
      })
      .when('/products/:productId', {
        templateUrl: 'views/products/show.html',
        controller: 'ProductsShowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
