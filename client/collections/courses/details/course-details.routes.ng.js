'use strict';

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('courses-details', {
        url: '/courses/details/:courseId',
        templateUrl: 'client/collections/courses/details/course-details.view.ng.html',
        controller: 'CourseDetailsController',
        resolve: {
          currentUser: ($q) => {
            if (Meteor.userId() == null) {
              return $q.reject('AUTH_REQUIRED');
            }
            else {
              return $q.resolve();
            }
          }
        }
      });
  });
