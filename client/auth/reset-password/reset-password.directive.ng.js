angular.module("pdaApp").directive('resetPassword', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/auth/resetPassword/resetPassword.view.ng.html',
    controllerAs: 'resetPassword',
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
