'use strict';

angular.module('pdaApp')
  .controller('ResetPasstordCtrl', function($scope, $reactive, $state) {
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
          $state.go('parties');
        }
      });
    };
  });
