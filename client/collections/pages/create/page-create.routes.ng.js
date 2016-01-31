'use strict';

angular.module('pdaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pages-create', {
        url: '/pages/create',
        templateUrl: 'client/collections/pages/create/page-create.view.ng.html',
        controller: 'PageCreateController',
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
