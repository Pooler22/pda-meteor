'use strict'

angular.module('pdaApp')
  .controller('CourseAddCtrl', function($scope) {

    $scope.save = function() {
      if ($scope.form.$valid) {
        Courses.insert($scope.newCourse);
        $scope.newCourse = undefined;
      }
    };
  });
