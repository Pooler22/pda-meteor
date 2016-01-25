'use strict'

angular.module('pdaApp')
  .controller('CourseEditCtrl', function($scope, $stateParams, $reactive,
    $state) {
    $scope.subscribe('courses');
    $scope.subscribe('pages');

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
      $state.go('courses-list');
    };

    $scope.findPages = function() {
      var pages = [];
      $scope.course.pages.forEach(function(item) {
        pages = Pages.findOne(item);
      });
      return pages;
    };

    $scope.save = function() {
      if ($scope.form.$valid) {
        Courses.update($scope.course._id, {
          $push: {
            "pages": Pages.insert($scope.newPage)
          }
        });
        $scope.newPage = undefined;
      }
    };
  });
