'use strict'

angular.module('pdaApp')
  .controller('MainCtrl', function($scope) {
    $scope.page = 1
    $scope.perPage = 10
    $scope.sort = {
      name_sort: 1
    };
    $scope.orderProperty = '1'

    $scope.helpers({
      courses: function() {
        return Courses.find({}, {
          sort: $scope.getReactively('sort')
        });
      },
      coursesCount: function() {
        return Counts.get('numberOfCourses');
      }
    });

    $scope.subscribe('courses', function() {
      return [{
        sort: $scope.getReactively('sort'),
        limit: parseInt($scope.getReactively('perPage')),
        skip: ((parseInt($scope.getReactively('page'))) - 1) * (
          parseInt($scope.getReactively('perPage')))
      }, $scope.getReactively('search')];
    });

    $scope.save = function() {
      if ($scope.form.$valid) {
        Courses.insert($scope.newCourse);
        $scope.newCourse = undefined;
      }
    };

    $scope.remove = function(course) {
      Courses.remove({
        _id: course._id
      });
    };

    $scope.pageChanged = function(newPage) {
      $scope.page = newPage;
    };

    return $scope.$watch('orderProperty', function() {
      if ($scope.orderProperty) {
        $scope.sort = {
          name_sort: parseInt($scope.orderProperty)
        };
      }
    });
  });
