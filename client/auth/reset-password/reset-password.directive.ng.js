angular.module("pdaApp").directive('reset-password', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/auth/reset-password/reset-password.view.ng.html',
    controllerAs: 'reset-password',
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
