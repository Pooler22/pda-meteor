'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'client/static/about/about.view.ng.html',
        controller: 'AboutCtrl'
      });
  });
