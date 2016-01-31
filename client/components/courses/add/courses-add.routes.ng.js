'use strict';

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('courses-add', {
        url: '/courses/add',
        templateUrl: 'client/components/courses/add/courses-add.view.ng.html',
        controller: 'CourseAddController',
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
