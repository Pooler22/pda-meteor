'use strict'

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('courses-details', {
        url: '/courses/details',
        templateUrl: 'client/courses/details/details.view.ng.html',
        controller: 'CourseAddCtrl'
      });
  });
