'use strict'

angular.module('pdaApp')
  .directive('exec', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/components/exec/exec.view.ng.html',
      controllerAs: 'exec',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        this.submit = () => {
          Meteor.call('testCode', $scope.exec.userCode, function(err,
            response) {
            $scope.exec.resoult = response;
            console.log($scope.exec.userCode);
            console.log(response);
          });
        };

      }
    };
  });
