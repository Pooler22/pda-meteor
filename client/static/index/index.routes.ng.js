'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'client/static/index/index.view.ng.html',
        controller: 'IndexCtrl'
      }).state('login', {
        url: '/login',
        template: '<login></login>'
      }).state('register', {
        url: '/register',
        template: '<register></register>'
      })
      .state('reset-password', {
        url: '/reset-password',
        template: '<reset-password></reset-password>'
      });
  });
