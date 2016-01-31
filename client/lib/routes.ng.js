angular.module('pdaApp')
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('login', {
        url: '/login',
        template: '<login></login>'
      }).state('register', {
        url: '/register',
        template: '<register></register>'
      }).state('resetPassword', {
        url: '/resetPassword',
        template: '<resetPassword></resetPassword>'
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
