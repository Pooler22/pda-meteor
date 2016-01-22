'use strict'

angular.module('pdaApp')
  .controller('CourseListCtrl', function($scope) {
    $scope.page = 1
    $scope.perPage = 10
    $scope.sort = {
      name_sort: 1
    };
    $scope.orderProperty = '1'

    $scope.helpers({
      courses: () => {
        return Courses.find({}, {
          sort: $scope.getReactively('sort')
        });
      },
      coursesCount: () => {
        return Counts.get('numberOfCourses');
      }
    });

    $scope.subscribe('courses', () => {
      return [{
        sort: $scope.getReactively('sort'),
        limit: parseInt($scope.getReactively('perPage')),
        skip: ((parseInt($scope.getReactively('page'))) - 1) * (
          parseInt($scope.getReactively('perPage')))
      }, $scope.getReactively('search')];
    });

    $scope.remove = (course) => {
      Courses.remove({
        _id: course._id
      });
    };

    $scope.pageChanged = function(newPage) {
      $scope.page = newPage;
    };

    $scope.startCourse = function(course) {
      location.href = '/courses/details/' + course._id;
    };

    return $scope.$watch('orderProperty', function() {
      if ($scope.orderProperty) {
        $scope.sort = {
          name_sort: parseInt($scope.orderProperty)
        };
      }
    });
  });
