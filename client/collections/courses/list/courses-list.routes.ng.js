'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('courses-list', {
        url: '/courses',
        templateUrl: 'client/collections/courses/list/courses-list.view.ng.html',
        controller: 'CourseListController'
      });
  });
