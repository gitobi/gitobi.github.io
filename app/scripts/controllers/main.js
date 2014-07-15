'use strict';

/**
 * @ngdoc function
 * @name jamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jamesApp
 */
angular.module('jamesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.products = [
      { id: 'kanban-san', name: 'Kanban-San', description: '旅が好きなすべての人に全く新しい旅行体験を提供します。' },
      { id: 'kanban-platform', name: 'Kanban Platform', description: '電子看板を誰でも手軽に作れるプラットフォームを提供します。' },
      { id: 'pawasupo', name: 'Pawasupo', description: '新しいパワースポット巡りを提供します。' }
    ];
  });
