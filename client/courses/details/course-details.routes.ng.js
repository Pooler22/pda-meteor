'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('courses-details', {
        url: '/courses/details/:courseId',
        templateUrl: 'client/courses/details/course-details.view.ng.html',
        controller: 'CourseDetailsCtrl'
      });
  });
