'use strict'

angular.module('pdaApp')
  .controller('CourseDetailsController', function($scope, $stateParams) {
    $scope.subscribe('courses');
    $scope.subscribe('pages');
    $scope.subscribe('userProgress');


    $scope.helpers({
      course: function() {
        var course = Courses.findOne($stateParams.courseId);


        Meteor.call('prepareStructure', $stateParams.courseId, Meteor.userId(),
          function(
            err,
            response) {
            console.log(response);
            console.log("Error: " + err);
          });


        return course;
      },
      header: function() {
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
      page.result = $scope.containsWorld(page.forbiddenWords, page.startupCode) +
        $scope.containsWorld1(page.requiredWords, page.startupCode)
      if (page.result === "") {
        console.log("Poprawny kod, czas przesłać go na serwer.");

        Meteor.call('checkCode', $stateParams.courseId, page._id, Meteor.userId(),
          page.startupCode,
          function(
            err,
            response) {
            console.log(response);
            console.log("Error: " + err);
          });
      } else {
        console.log("Coś poszło nie tak");
      }
    };
  });
