'use strict';

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('courses-edit', {
        url: '/courses/edit/:courseId',
        templateUrl: 'client/collections/courses/edit/course-edit.view.ng.html',
        controller: 'CourseEditController',
        resolve: {
          currentUser: ($q) => {
            if ((Meteor.userId() == null) || (Meteor.user().profile.roles != "Admin")) {
              return $q.reject('AUTH_REQUIRED');
            }
            else {
              return $q.resolve();
            }
          }
        }
      });
  });
