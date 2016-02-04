'use strict';

angular.module('pdaApp')
  .directive('courseshow', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/course/show/course-show.html',
      controllerAs: 'courseshow',
      controller: function($scope, $stateParams, $state, $reactive, $mdToast) {
        $reactive(this).attach($scope);

        // to do: test function
        //to do: repair subscribe
        this.subscribe('pages');
        this.subscribe('courses');
        // to do: test function
        this.helpers({
          // to do: test function
          editorOptions: () => {
            return {
              lineNumbers: true,
              mode: "javascript"
            };
          },
          // to do: test function
          editorCode: () => {
            return "Code to show in editor";
          },
          // to do: test function
          course: () => {
            Meteor.call('prepareStructure', $stateParams.courseId, Meteor.userId(), (error) => {
              if (error) {
                //to do dialog
              }
            });
            return Courses.findOne($stateParams.courseId);
          },
          // to do: test function
          pages: () => {
            return Pages.find({
              "ownerId": $stateParams.courseId
            });
          }
        });
        // to do: test function
        this.codemirrorLoaded = (_editor)=> {
          // Editor part
          var _doc = _editor.getDoc();
          _editor.focus();
          // Options
          _editor.setOption('firstLineNumber', 10);

        };
        // to do: test function
        this.editorOptions = {
          lineWrapping: true,
          lineNumbers: true,
          mode: 'text/x-java',
          autofocus: true,
        };
        this.isSomething = true;
        // to do: test function
        this.containsWorld = (searchArray, code) => {
          var element = null;
          for (var i = 0; i < searchArray.length; i++) {
            if (code.indexOf(searchArray[i]) !== -1) {
              return "Błąd: Nie używaj: " + searchArray[i] +
                ", nie jest ono potrzebne.";
            }
          }
          return "";
        };
        // to do: test function
        this.containsWorld1 = (searchArray, code) => {
          var element = null;
          for (var i = 0; i < searchArray.length; i++) {
            if (code.indexOf(searchArray[i]) === -1) {
              return "\nBłąd: Brakuje wymaganego słowa: " + searchArray[i] +
                ".";
            }
          }
          return "";
        };
        // to do: test function
        this.runCode = (page) => {
          page.result = this.containsWorld(page.forbiddenWords, page.startupCode) +
            this.containsWorld1(page.requiredWords, page.startupCode)
          Meteor.call('checkCode', $stateParams.courseId, page._id, Meteor.userId(), page.startupCode, (error, response) => {
            if (error) {
              page.result = error;
              //to do dialog
            } else {
              page.result = response;
            }
            this.$apply();
          });
        };
      }
    };
  });
