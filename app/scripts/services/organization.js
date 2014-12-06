'use strict';

/**
 * @ngdoc service
 * @name jamesApp.organization
 * @description
 * # organization
 * Service in the jamesApp.
 */
angular.module('jamesApp')
  .service('Organization', function Organization() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var organization = {
      fullName: 'Gitobi LLC',
      name: 'Gitobi',
      leadTitle: 'Gitobiが目指す未来',
      lead: '技術と美術で便利なものを生み出し続ける',
      foundedAt: '2014/11/10'
    };

    this.get = function() {
      return organization;
    };
  });
