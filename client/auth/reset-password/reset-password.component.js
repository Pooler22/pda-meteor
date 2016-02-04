angular.module("pdaApp").directive('resetpw', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/auth/reset-password/reset-password.html',
    controllerAs: 'resetpw',
    controller: function($scope, $reactive, $state, $mdToast) {
      $reactive(this).attach($scope);

      this.credentials = {
        email: ''
      };
      // to do: test function
      // to do: set settings to send email
      this.reset = () => {
        Accounts.forgotPassword(this.credentials, (err) => {
          if (err) {
            $mdToast.show($mdToast.simple().textContent(err.reason));
          } else {
            $mdToast.show($mdToast.simple()
              .textContent("Hasło zostało zresetowane."));
            $state.go('homepage');
          }
        });
      };
    }
  };
});