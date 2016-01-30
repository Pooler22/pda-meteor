angular.module("pdaApp").directive('resetPassword', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/auth/resetPassword/resetPassword.view.ng.html',
    controllerAs: 'resetPassword',
    controller: function($scope, $reactive, $state) {
      $reactive(this).attach($scope);

      this.credentials = {
        email: ''
      };

      this.error = '';

      this.reset = () => {
        Accounts.forgotPassword(this.credentials, (err) => {
          if (err) {
            this.error = err;
          } else {
            $state.go('index');
          }
        });
      };
    }
  };
});
