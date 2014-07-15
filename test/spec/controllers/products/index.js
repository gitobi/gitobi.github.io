'use strict';

describe('Controller: ProductsIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('jamesApp'));

  var ProductsIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsIndexCtrl = $controller('ProductsIndexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
