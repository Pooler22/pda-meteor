'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('courses-add', {
        url: '/courses/add',
        templateUrl: 'client/collections/courses/add/courses-add.view.ng.html',
        controller: 'CourseAddCtrl'
      });
  });
