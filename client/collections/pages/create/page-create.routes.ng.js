'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pages-create', {
        url: '/pages/create',
        templateUrl: 'client/collections/pages/create/page-create.view.ng.html',
        controller: 'PageCreateController'
      });
  });
