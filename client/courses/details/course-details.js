'use strict';

angular.module('pdaApp')
  .directive('coursedetails', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/courses/details/course-details.html',
      controllerAs: 'coursedetails',
      controller: function($scope, $stateParams, $state, $reactive, $mdToast) {
        $reactive(this).attach($scope);

        //to do: repair subscribe
        $scope.subscribe('pages');
        $scope.subscribe('courses');
        $scope.helpers({
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
              }
              else{
                page.result = response;
              }
              $scope.$apply();
            });
        };

      }
    };
  });
