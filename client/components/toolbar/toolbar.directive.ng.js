'use strict';

angular.module('pdaApp')
  .directive('toolbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
      controllerAs: 'toolbar',
      controller: function($scope, $reactive, $state) {
        $reactive(this).attach($scope);

        this.helpers({
          isLoggedIn: () => {
            return Meteor.userId() !== null;
          },
          currentUser: () => {
            return Meteor.user();
          }
        });

        this.logout = () => {
          Accounts.logout();
          $state.go('index');
        };

      }
    };
  });
