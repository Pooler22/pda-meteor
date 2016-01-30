'use strict';

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'client/static/index/index.view.ng.html'
      }).state('login', {
        url: '/login',
        template: '<login></login>'
      }).state('register', {
        url: '/register',
        template: '<register></register>'
      })
      .state('resetPassword', {
        url: '/resetPassword',
        template: '<resetPassword></resetPassword>'
      });
  });
