'use strict'

angular.module('pdaApp')
  .controller('CourseDetailsCtrl', function($scope, $stateParams) {
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
            //$scope.exec.resoult = response;
            //console.log($scope.exec.startupCode);
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

      //
      // Meteor.call('testCode', page._id, $scope.startupCode, function(
      //   err,
      //   response) {
      //   $scope.exec.resoult = response;
      //   console.log($scope.exec.startupCode);
      //   console.log(response);
      // });



    };

  });
