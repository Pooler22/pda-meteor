'use strict';

angular.module('pdaApp')
  .directive('courseshow', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/course/show/course-show.html',
      controllerAs: 'courseshow',
      controller: function($scope, $stateParams, $state, $reactive, $mdToast) {
        $reactive(this).attach($scope);


        this.subscribe('pages');
        this.subscribe('courses');

        this.helpers({

          editorOptions: () => {
            return {
              lineNumbers: true,
              mode: "javascript"
            };
          },

          editorCode: () => {
            return "Code to show in editor";
          },

          course: () => {
            Meteor.call('prepareStructure', $stateParams.courseId,
              Meteor.userId(), (error) => {
                if (error) {}
              });
            return Courses.findOne($stateParams.courseId);
          },

          pages: () => {
            return Pages.find({
              "ownerId": $stateParams.courseId
            });
          }
        });

        this.codemirrorLoaded = (_editor) => {
          var _doc = _editor.getDoc();
          _editor.focus();
          _editor.setOption('firstLineNumber', 10);
        };

        this.editorOptions = {
          lineWrapping: true,
          lineNumbers: true,
          mode: 'text/x-java',
          autofocus: true,
        };
        this.isSomething = true;

        this.checkAddMessage = (message, result) => {
          if (result !== "") {
            return message + result;
          } else {
            return result;
          }
        };

        this.checkText = (page) => {
          return this.checkAddMessage(
              "Ostrzeżenie: Użyte zwroty są zabronione: ",
              this.searchWord(page.forbiddenWords, page.startupCode)) +
            this.checkAddMessage(
              "\nOstrzeżenie: Podane zwroty są wymagane: ",
              this.searchWord1(page.requiredWords, page.startupCode));
        };

        this.searchWord = (searchArray, code) => {
          var result = "";
          var element = "";
          for (var i = 0; i < searchArray.length; i++) {
            if (code.indexOf(searchArray[i]) !== -1) {
              result += searchArray[i] + " ";
            }
          }
          return result;
        };

        this.searchWord1 = (searchArray, code) => {
          var result = "";
          var element = "";
          for (var i = 0; i < searchArray.length; i++) {
            if (code.indexOf(searchArray[i]) === -1) {
              result += searchArray[i] + " ";
            }
          }
          return result;
        };

        this.runCode = (page) => {
          page.result = this.checkText(page);
          Meteor.call('checkCode', $stateParams.courseId, page._id,
            Meteor.userId(), page.startupCode, (error, response) => {
              if (error) {
                page.result += "\n" + error;
              } else {
                page.result += "\n" + response;
              }
              this.$apply();
            });
        };

      }
    };
  });
