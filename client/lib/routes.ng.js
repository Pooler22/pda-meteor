angular.module('pdaApp')
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'client/index/index.html'
    }).state('coursesadd', {
        url: '/courses/add',
        template: '<coursesadd></coursesadd>',
        resolve: {
          currentUser: ($q) => {
            if ((Meteor.userId() === null) || (Meteor.user().profile.roles != "Admin")) {
              return $q.reject('AUTH_REQUIRED');
            }
            else {
              return $q.resolve();
            }
          }
        },
      }).state('coursedetails', {
        url: '/courses/details/:courseId',
        template: '<coursedetails></coursedetails>',
        resolve: {
          currentUser: ($q) => {
            if (Meteor.userId() === null) {
              return $q.reject('AUTH_REQUIRED');
            }
            else {
              return $q.resolve();
            }
          }
        }
      }).state('coursesedit', {
        url: '/courses/edit/:courseId',
        template: '<coursesedit></coursesedit>',
        resolve: {
          currentUser: ($q) => {
            if ((Meteor.userId() === null) || (Meteor.user().profile.roles != "Admin")) {
              return $q.reject('AUTH_REQUIRED');
            }
            else {
              return $q.resolve();
            }
          }
        }
      }).state('courseslist', {
        url: '/courses',
        template: '<courseslist></courseslist>',
        resolve: {
          currentUser: ($q) => {
            if (Meteor.userId() === null) {
              return $q.reject('AUTH_REQUIRED');
            }
            else {
              return $q.resolve();
            }
          }
        }
      }).state('login', {
        url: '/login',
        template: '<login></login>'
      }).state('register', {
        url: '/register',
        template: '<register></register>'
      }).state('resetpw', {
        url: '/resetpw',
        template: '<resetpw></resetpw>',
      });

    $urlRouterProvider.otherwise('/');
  }).run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams,
      fromState, fromParams, error) {
      switch (error) {
        case 'AUTH_REQUIRED':
        case 'FORBIDDEN':
        case 'UNAUTHORIZED':
          $state.go('index');
          break;
      }
    });
  }]);
