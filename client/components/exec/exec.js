'use strict'

angular.module('pdaApp')
  .directive('exec', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/components/exec/exec.view.ng.html',
      controllerAs: 'exec',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        this.addCode = function(newCode) {
          this.codes.push({
            text: newCode
          });
        };

        this.helpers({
          console: () => {
            return Exec.Console.find();
          }
        });

        this.helpers({
          submit: (event) => {
            //var cmd = this.value;
            Meteor.call('exec', cmd);
            //event.target.cmd.value = "";
            return false;
          }
        });
      }
    };
  });
