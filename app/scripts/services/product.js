'use strict';

/**
 * @ngdoc service
 * @name jamesApp.product
 * @description
 * # product
 * Service in the jamesApp.
 */
angular.module('jamesApp')
  .service('Product', function Product() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var kanbanSan = { id: 'kanban-san', name: 'Kanban-San', description: '旅が好きなすべての人に全く新しい旅行体験を提供します。' };
    var kanbanPlatform = { id: 'kanban-platform', name: 'Kanban Platform', description: '電子看板を誰でも手軽に作れるプラットフォームを提供します。' };
    var pawasupo = { id: 'pawasupo', name: 'Pawasupo', description: '新しいパワースポット巡りを提供します。' };
    var products = [
      kanbanSan,
      kanbanPlatform,
      pawasupo
    ];

    this.index = function() {
        return products;
    };
    this.get = function(id) {
      if ( kanbanSan.id === id ) {
        return kanbanSan;
      } else if ( kanbanPlatform.id === id ) {
        return kanbanPlatform;
      } else if ( pawasupo.id === id ) {
        return pawasupo;
      }
    };
  });
