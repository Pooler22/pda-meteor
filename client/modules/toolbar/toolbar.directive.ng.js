'use strict';

angular.module('pdaApp')
  .directive('toolbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/modules/toolbar/toolbar.view.ng.html',
      controllerAs: 'toolbar',
      controller: function($scope, $reactive, $state, $mdToast) {
        $reactive(this).attach($scope);

        this.currentUser = () => {
          return Meteor.user();
        };

        this.currentUserAdmin = () => {
          return this.currentUserAdmin.roles.indexOf("Admin") != -1;
        };

        this.name = () => {
          if(this.currentUser != null){
            return this.getReactively('currentUser.profile.firstName') || this.getReactively('currentUser.profile.name');
          }
          else{
            return "no-name";
          }
        };

        this.logout = () => {
          $mdToast.show($mdToast.simple()
            .textContent("Zostałeś wylogowany."));
          Accounts.logout();
          $state.go('index');
        };


      }
    };
  });
