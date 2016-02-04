'use strict';

angular.module("pdaApp").directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/auth/login/login.html',
    controllerAs: 'login',
    controller: function($scope, $reactive, $state, $mdToast) {
      $reactive(this).attach($scope);

      this.credentials = {
        email: '',
        password: ''
      };
      // to do: test function
      this.login = (adadasd) => {
        Meteor.loginWithPassword(this.credentials.email, this.credentials
          .password, (err) => {
            if (err) {
              $mdToast.show($mdToast.simple().textContent(err.reason));
            } else {
              $mdToast.show($mdToast.simple()
                .textContent("Zostałeś zalogowany."));
              $state.go('homepage');
            }
          });
      };
      // to do: test function
      this.loginFacebook = () => {
        Meteor.loginWithFacebook({}, function(err) {
          if (err) {
            $mdToast.show($mdToast.simple().textContent("Błąd logowania."));
          } else {
            $mdToast.show($mdToast.simple()
              .textContent("Zostałeś zalogowany."));
            $state.go('homepage');
          }
        });
      };
    }
  };
});
