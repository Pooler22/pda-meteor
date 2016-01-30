angular.module("pdaApp").directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/auth/login/login.view.ng.html',
    controllerAs: 'login',
    controller: function($scope, $reactive, $state, $mdToast) {
      $reactive(this).attach($scope);

      this.credentials = {
        email: '',
        password: ''
      };

      this.login = () => {
        Meteor.loginWithPassword(this.credentials.email, this.credentials
          .password, (err) => {
            if (err) {
              $mdToast.show($mdToast.simple().textContent(err.reason));
            } else {
              $mdToast.show($mdToast.simple()
                .textContent("Zostałeś zalogowany."));
              $state.go('index');
            }
          });
      };
    }
  };
});
