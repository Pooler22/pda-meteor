angular.module('pdaApp')
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

      $stateProvider.state('homepage', {
        url: '/',
        templateUrl: 'client/homepage/homepage.html'
      }).state('coursecreate', {
        url: '/course/create',
        template: '<coursecreate></coursecreate>',
        resolve: {
          currentUser: ($q) => {
            if ((Meteor.userId() === null) || (Meteor.user().profile.roles !=
                "Admin")) {
              return $q.reject('AUTH_REQUIRED');
            } else {
              return $q.resolve();
            }
          }
        },
      }).state('courseshow', {
        url: '/course/show/:courseId',
        template: '<courseshow></courseshow>',
        resolve: {
          currentUser: ($q) => {
            if (Meteor.userId() === null) {
              return $q.reject('AUTH_REQUIRED');
            } else {
              return $q.resolve();
            }
          }
        }
      }).state('courseupdate', {
        url: '/course/update/:courseId',
        template: '<courseupdate></courseupdate>',
        resolve: {
          currentUser: ($q) => {
            if ((Meteor.userId() === null) || (Meteor.user().profile.roles !=
                "Admin")) {
              return $q.reject('AUTH_REQUIRED');
            } else {
              return $q.resolve();
            }
          }
        }
      }).state('courseindex', {
        url: '/course',
        template: '<courseindex></courseindex>',
        resolve: {
          currentUser: ($q) => {
            if (Meteor.userId() === null) {
              return $q.reject('AUTH_REQUIRED');
            } else {
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
          $state.go('homepage');
          break;
      }
    });
  }]);
