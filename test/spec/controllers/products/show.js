'use strict';

describe('Controller: ProductsShowCtrl', function () {

  // load the controller's module
  beforeEach(module('jamesApp'));

  var ProductsShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsShowCtrl = $controller('ProductsShowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
