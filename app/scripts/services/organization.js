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
      fullName: 'Gitobi 合同会社',
      name: 'Gitobi',
      leadTitle: 'Gitobiが目指す未来',
      lead: '技術と美術で便利なものを生み出し続ける',
      foundedAt: '2014/11/10',
      address: '東京都世田谷区三宿二丁目24番13号',
      leaderMember: '小野寺 類',
      capital: '5,000,000 円',
      purposes: {
        1: 'インターネット及びモバイル端末を利用した事業の運営',
        2: 'モバイル端末の開発、製造及び販売',
        3: '前各号に附帯または関連する一切の事業'
      }
    };

    this.get = function() {
      return organization;
    };
  });
