'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pages-index', {
        url: '/pages',
        templateUrl: 'client/collections/pages/index/page-index.view.ng.html',
        controller: 'PageIndexCtrl'
      });
  });
