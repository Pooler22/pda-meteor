'use strict'

angular.module('pdaApp')
  .controller('CourseAddCtrl', function($scope, $state) {
    $scope.save = function() {
      if ($scope.form.$valid) {
        $state.go('courses-edit', {
          courseId: Courses.insert($scope.newCourse)
        });
      }
    };
  });
