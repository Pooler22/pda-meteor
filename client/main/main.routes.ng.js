'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/courses',
        templateUrl: 'client/main/main.view.ng.html',
        controller: 'MainCtrl'
      });
  });
