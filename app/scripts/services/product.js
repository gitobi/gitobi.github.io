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

    var kanbanSan = {
      id: 'kanban-san',
      name: 'Kanban-San',
      catchPhrase: '大切なお客様に全く新しい旅行体験を',
      descriptions: [
        {
          title: '大切なお客様に全く新しい旅行体験を',
          lead: '旅が好きなすべての人に全く新しい旅行体験を提供します。'
        },
        {
          title: '使いやすい管理画面で今の情報を',
          lead: 'お客様に提供する情報はいつでもどこからでも管理できます。'
        },
        {
          title: '最新技術と洗練されたシステムを',
          lead: '専用端末をお客様にお配りする必要はもうありません。'
        }
      ]
    };
    var kanbanPlatform = {
      id: 'kanban-platform',
      name: 'Kanban Platform',
      catchPhrase: '手軽にiBeaconを使った電子看板を',
      descriptions: [
        {
          title: '手軽にiBeaconを使った電子看板を',
          lead: 'スマホ・ウェアラブルデバイス時代の電子看板プラットフォームです。'
        },
        {
          title: 'アプリケーションの開発に専念しましょう',
          lead: '面倒な管理画面開発、サーバー管理をする必要はありません。'
        },
        {
          title: '高度で効果的なデータ分析を',
          lead: '集まったビッグデータの分析・レポーティング環境を提供します。'
        }
      ]
    };
    var pawasupo = {
      id: 'pawasupo',
      name: 'Pawasupo',
      catchPhrase: 'パワースポット巡りの新しいアプリケーション',
      descriptions: [
        {
          title: 'パワースポット巡りの新しいアプリケーション',
          lead: 'ここだけのストーリー、お教えします。'
        },
        {
          title: 'パワースポットをコレクション',
          lead: '全国のパワースポットをコンプリートしよう。'
        },
        {
          title: 'ストーリーテラーがあなたの手元に',
          lead: 'スマホを片手にパワースポットを巡りましょう。'
        }
      ]
    };
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
