'use strict';

describe('Directive: products/list', function () {

  // load the directive's module
  beforeEach(module('jamesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<products/list></products/list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the products/list directive');
  }));
});
