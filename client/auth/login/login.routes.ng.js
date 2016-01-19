'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'client/auth/login/login.view.ng.html',
        controller: 'LoginCtrl'
      });
  });
