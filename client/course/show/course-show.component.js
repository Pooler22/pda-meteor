'use strict';

angular.module('pdaApp')
  .directive('courseshow', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/course/show/course-show.html',
      controllerAs: 'courseshow',
      controller: function($scope, $stateParams, $state, $reactive, $mdToast) {
        $reactive(this).attach($scope);

        //to do: repair subscribe
        $scope.subscribe('pages');
        $scope.subscribe('courses');
        $scope.helpers({
          editorOptions: function() {
            return {
              lineNumbers: true,
              mode: "javascript"
            };
          },

          editorCode: function() {
            return "Code to show in editor";
          },

          course: function() {
            Meteor.call('prepareStructure', $stateParams.courseId, Meteor.userId(), (error) => {
              if (error) {
                //to do dialog
              }
            });
            return Courses.findOne($stateParams.courseId);
          },
          pages: function() {
            return Pages.find({
              "ownerId": $stateParams.courseId
            });
          }
        });

        $scope.codemirrorLoaded = function(_editor) {
          // Editor part
          var _doc = _editor.getDoc();
          _editor.focus();
          // Options
          _editor.setOption('firstLineNumber', 10);

        };
        $scope.editorOptions = {
          lineWrapping: true,
          lineNumbers: true,
          mode: 'text/x-java',
          autofocus: true,
        };
        $scope.isSomething = true;



        $scope.containsWorld = function(searchArray, code) {
          var element = null;
          for (var i = 0; i < searchArray.length; i++) {
            if (code.indexOf(searchArray[i]) !== -1) {
              return "Błąd: Nie używaj: " + searchArray[i] +
                ", nie jest ono potrzebne.";
            }
          }
          return "";
        };

        $scope.containsWorld1 = function(searchArray, code) {
          var element = null;
          for (var i = 0; i < searchArray.length; i++) {
            if (code.indexOf(searchArray[i]) === -1) {
              return "\nBłąd: Brakuje wymaganego słowa: " + searchArray[i] +
                ".";
            }
          }
          return "";
        };

        $scope.runCode = function(page) {
          page.result = this.containsWorld(page.forbiddenWords, page.startupCode) +
            this.containsWorld1(page.requiredWords, page.startupCode)
          Meteor.call('checkCode', $stateParams.courseId, page._id, Meteor.userId(), page.startupCode, (error, response) => {
            if (error) {
              page.result = error;
              //to do dialog
            } else {
              page.result = response;
            }
            $scope.$apply();
          });
        };

      }
    };
  });
