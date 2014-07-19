'use strict';

describe('Controller: ContactThanksCtrl', function () {

  // load the controller's module
  beforeEach(module('jamesApp'));

  var ContactThanksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactThanksCtrl = $controller('ContactThanksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
