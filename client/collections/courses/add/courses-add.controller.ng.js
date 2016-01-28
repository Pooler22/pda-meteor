'use strict'

angular.module('pdaApp')
  .controller('CourseAddController', function($scope, $state) {
    $scope.save = function() {
      if ($scope.form.$valid) {
        $scope.newCourse.pages = [];
        $state.go('courses-edit', {
          courseId: Courses.insert($scope.newCourse)
        });
      }
    };
  });
