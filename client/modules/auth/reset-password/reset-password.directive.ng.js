angular.module("pdaApp").directive('resetpw', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/modules/auth/reset-password/reset-password.view.ng.html',
    controllerAs: 'resetpw',
    controller: function($scope, $reactive, $state, $mdToast) {
      $reactive(this).attach($scope);

      this.credentials = {
        email: ''
      };

      this.reset = () => {
        Accounts.forgotPassword(this.credentials, (err) => {
          if (err) {
            $mdToast.show($mdToast.simple().textContent(err.reason));
          } else {
            $mdToast.show($mdToast.simple()
              .textContent("Hasło zostało zresetowane."));
            $state.go('index');
          }
        });
      };
    }
  };
});
