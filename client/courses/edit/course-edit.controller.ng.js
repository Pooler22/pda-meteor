'use strict'

angular.module('pdaApp')
  .controller('CourseEditCtrl', function($scope, $stateParams, $reactive,
    $state) {
    $reactive(this).attach($scope);
    $scope.subscribe('courses');
    $scope.subscribe('pages');

    $scope.helpers({
      course: function() {
        return Courses.findOne($stateParams.courseId);
      }
    });

    $scope.getPages = () => {
      var pagesTmp = [];
      // Courses.findOne($stateParams.courseId).pages.forEach(function(item) {
      //   pagesTmp.push(Pages.findOne());
      // });
      console.log(pagesTmp);
      return pagesTmp;
    };

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
