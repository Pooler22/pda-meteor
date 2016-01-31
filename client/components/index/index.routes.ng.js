'use strict';

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'client/components/index/index.view.ng.html'
      });
  });
