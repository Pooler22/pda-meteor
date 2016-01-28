'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('courses-edit', {
        url: '/courses/edit/:courseId',
        templateUrl: 'client/courses/edit/course-edit.view.ng.html',
        controller: 'CourseEditCtrl'
      });
  });
