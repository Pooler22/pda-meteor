'use strict'

angular.module('pdaApp')
  .controller('CourseDetailsCtrl', function($scope, $stateParams) {
    $scope.subscribe('courses');
    $scope.subscribe('pages');
    $scope.subscribe('userProgress');


    $scope.helpers({
      course: function() {
        return Courses.findOne($stateParams.courseId);
      },
      header: function() {
        return Pages.find({
          "ownerId": $stateParams.courseId
        });
      }
    });

    $scope.runCode = function() {
      Meteor.call('testCode', $scope.page._id, $scope.userCode, function(
        err,
        response) {
        $scope.exec.resoult = response;
        console.log($scope.exec.userCode);
        console.log(response);
      });
    };

  });
