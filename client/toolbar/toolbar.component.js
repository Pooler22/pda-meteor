'use strict';

angular.module('pdaApp')
  .directive('toolbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/toolbar/toolbar.html',
      controllerAs: 'toolbar',
      controller: function($scope, $reactive, $state, $mdToast) {
        $reactive(this).attach($scope);
        // to do: test function
        this.helpers({
          currentUser: () => {
            return Meteor.user();
          },
        });
        // to do: test function
        this.name = () => {
          if (this.currentUser) {
            return this.getReactively('currentUser.profile.firstName') || this.getReactively('currentUser.profile.name');
          }
          return "no-name";
        };
        // to do: test function
        this.currentUserAdmin = () => {
          if ((this.currentUser != null) && (this.currentUser.roles.indexOf("Admin") != -1)) {
            return true;
          }
          return false;
        };
        // to do: test function
        this.logout = () => {
          Accounts.logout();
          $mdToast.show($mdToast.simple()
            .textContent("Zostałeś wylogowany."));
          $state.go('homepage');
        };
      }
    };
  });
