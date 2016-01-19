'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('courses-add', {
        url: '/courses/add',
        templateUrl: 'client/courses/add/courses-add.view.ng.html',
        controller: 'CourseAddCtrl'
      });
  });
