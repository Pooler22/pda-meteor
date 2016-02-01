'use strict';
angular.module('pdaApp')
  .directive('courseslist', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/components/courses/list/courses-list.html',
      controllerAs: 'courseslist',
      controller: function($scope, $state, $reactive, $mdToast) {
    $reactive(this).attach($scope);

    $scope.page = 1;
    $scope.perPage = 10;
    $scope.sort = {
      name_sort: 1
    };
    $scope.orderProperty = '1';

    $scope.helpers({
      courses: () => {
        return Courses.find({}, {
          sort: $scope.getReactively('sort')
        });
      },
      coursesCount: () => {
        return Counts.get('numberOfCourses');
      },
      isAdmin:()=>{
        return Meteor.user().profile.roles == "Admin";
      }
    });
    //to do: repair subscribe
    $scope.subscribe('courses', () => {
      return [{
        sort: $scope.getReactively('sort'),
        limit: parseInt($scope.getReactively('perPage')),
        skip: ((parseInt($scope.getReactively('page'))) - 1) * (
          parseInt($scope.getReactively('perPage')))
      }, $scope.getReactively('search')];
    });

    $scope.pageChanged = function(newPage) {
      $scope.page = newPage;
    };

    $scope.startCourse = function(course) {
      $state.go('coursedetails', {
        courseId: course
      });
    };

    $scope.editCourse = function(course) {
      $state.go('coursesedit', {
        courseId: course
      });
    };

    $scope.removeCourse = function(course) {
      Courses.remove({
        _id: course._id
      });
    };

    return $scope.$watch('orderProperty', function() {
      if ($scope.orderProperty) {
        $scope.sort = {
          name_sort: parseInt($scope.orderProperty)
        };
      }
    });

  }
};
  });
