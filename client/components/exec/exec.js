'use strict'

angular.module('pdaApp')
  .directive('exec', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/components/exec/exec.view.ng.html',
      controllerAs: 'exec',
      controller: function($scope) {
        $scope.addCode = function(newCode) {
          $scope.codes.push({
            text: newCode
          });
        };

        $scope.helpers({
          console: () => {
            return Exec.Console.find();
          }
        });

        $scope.helpers({
          submit: (event) => {
            //var cmd = $scope.value;
            Meteor.call('exec', cmd);
            //event.target.cmd.value = "";
            return false;
          }
        });
      }
    };
  });
