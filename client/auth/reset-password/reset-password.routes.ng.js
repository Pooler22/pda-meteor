'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('reset-password', {
        url: '/reset-password',
        templateUrl: 'client/auth/reset-password/reset-password.view.ng.html',
        controller: 'ResetPasstord'
      });
  });
