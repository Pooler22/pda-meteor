'use strict'

angular.module('pdaApp')
  .directive('codeconsole', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/components/codeConsole/codeConsole.view.ng.html',
      controllerAs: 'codeconsole',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        this.helpers({
          editorOptions: () => {
            return {
              lineNumbers: true,
              mode: "javascript"
            }
          },

          editorCode: () => {
            return "Code to show in editor";
          }
        });
      }
    };
  });
