'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'client/auth/register/register.view.ng.html',
        controller: 'RegisterCtrl'
      });
  });
