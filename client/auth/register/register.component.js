'use strict';

angular.module("pdaApp").directive('register', function() {
      return {
        restrict: 'E',
        templateUrl: 'client/auth/register/register.html',
        controllerAs: 'register',
        controller: function($scope, $reactive, $state, $mdToast) {
          $reactive(this).attach($scope);

          this.credentials = {
            email: '',
            password: '',
            firstName:'',
            lastName:''
          };

          this.register = () => {
            Accounts.createUser(this.credentials, (err) => {
              if (err) {
                $mdToast.show($mdToast.simple().textContent(err.reason));
              } else {
                $mdToast.show($mdToast.simple()
                  .textContent("Zostałeś zarejestrowany."));
                $state.go('homepage');
              }
            });
          };

          this.loginFacebook = () => {
            Meteor.loginWithFacebook({}, function(err) {
                if (err) {
                  $mdToast.show($mdToast.simple().textContent("Błąd logowania"));
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
