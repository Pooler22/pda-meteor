'use strict';

angular.module('pdaApp')
  .directive('toolbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
      controllerAs: 'toolbar',
      controller: function($scope, $reactive, $state, $mdToast) {
        $reactive(this).attach($scope);

        this.helpers({
          currentUser: () => {
            return Meteor.user();
          },
        });

        this.logout = () => {
          $mdToast.show($mdToast.simple()
            .textContent("Zostałeś wylogowany."));
          Accounts.logout();
          $state.go('index');
        };
      }
    };
  });
