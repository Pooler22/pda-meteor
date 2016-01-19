'use strict';

angular.module('pdaApp')
  .controller('RegisterCtrl', function($scope, $reactive, $state) {

    $reactive(this).attach($scope);

    this.credentials = {
      email: '',
      password: ''
    };

    this.error = '';

    this.register = () => {
      Accounts.createUser(this.credentials, (err) => {
        if (err) {
          this.error = err;
        } else {
          $state.go('index');
        }
      });
    };
  });
