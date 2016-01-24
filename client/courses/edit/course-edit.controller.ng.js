'use strict'

angular.module('pdaApp')
  .controller('CourseEditCtrl', function($scope, $stateParams) {
    $scope.subscribe('courses');
    $scope.subscribe('userProgress');

    $scope.helpers({
      course: function() {
        return Courses.findOne($stateParams.courseId);
      },
      updateCourse: function(course) {
        Courses.update($stateParams.courseId, {
          $set: {
            $course: course
          }
        });
      }
    });

    $scope.removeCourse = function(course) {
      Courses.update(course._id, course);
    };

    $scope.backToListCourse = function(course) {
      location.href = '/courses';
    };

  });
