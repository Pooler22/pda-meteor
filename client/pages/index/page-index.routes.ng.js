'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pages-index', {
        url: '/pages',
        templateUrl: 'client/pages/index/page-index.view.ng.html',
        controller: 'PageIndexCtrl'
      });
  });
