'use strict'

angular.module('pdaApp')
  .controller('CourseEditCtrl', function($scope, $stateParams, $reactive) {
    $scope.subscribe('courses');
    $scope.subscribe('userProgress');

    $scope.helpers({
      course: function() {
        return Courses.findOne($stateParams.courseId);
      }
    });

    $scope.update = function() {
      Courses.update($scope.course._id, {
        $set: {
          name: $scope.course.name,
          description: $scope.course.description,
          isPublic: $scope.course.isPublic,
        }
      });
    };

    $scope.updateCourse = function(element, newValue) {
      Courses.update($scope.course._id, {
        $set: {
          element: newValue
        }
      });
    };

    $scope.backToListCourse = function() {
      location.href = '/courses';
    };
  });
