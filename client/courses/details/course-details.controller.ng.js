'use strict'

angular.module('pdaApp')
  .controller('CourseDetailsCtrl', function($scope, $stateParams) {
    $scope.subscribe('courses');
    $scope.subscribe('userProgress');


    $scope.helpers({
      course: function() {
        return Courses.findOne($stateParams.courseId);
      },
    });

  });
