'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'client/index/index.view.ng.html',
        controller: 'IndexCtrl'
      });
  });
