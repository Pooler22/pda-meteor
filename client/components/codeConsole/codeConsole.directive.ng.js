'use strict'

angular.module('pdaApp')
  .directive('codeConsole', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/components/codeConsole/codeConsole.view.ng.html',
      controllerAs: 'codeConsole',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        $scope.document = function() {
          Tracker.afterFlush(function() {
            return ace.edit("editor").getValue();
          });
        }

        this.submit = () => {
          return function(editor) {
            editor.setTheme('ace/theme/monokai')
            editor.getSession().setMode('ace/mode/javascript')
            editor.setShowPrintMargin(false)
            editor.getSession().setUseWrapMode(true)
          }
        };

      }
    };
  });
