'use strict';
angular.module('pdaApp')
  .directive('courseslist', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/courses/list/courses-list.html',
      controllerAs: 'courseslist',
      controller: function($scope, $reactive, $state, $mdToast) {
        $reactive(this).attach($scope);
        $scope.page = 1;
        $scope.perPage = 10;
        $scope.sort = {
          name_sort: 1
        };
        $scope.orderProperty = '1';

        //to do: repair subscribe
        $scope.subscribe('courses', () => {
          return [{
            sort: this.getReactively('sort'),
            limit: parseInt(this.getReactively('perPage')),
            skip: ((parseInt(this.getReactively('page'))) - 1) * (
              parseInt(this.getReactively('perPage')))
          }, this.getReactively('search')];
        });

        $scope.helpers({
          courses: () => {
            return Courses.find({}, {
              sort: this.getReactively('sort')
            });
          },
          coursesCount: () => {
            return Counts.get('numberOfCourses');
          },
          isAdmin: () => {
            console.log("admin" + Meteor.user().profile.roles);
            return Meteor.user().profile.roles == "Admin";
          }
        });

        $scope.pageChanged = function(newPage) {
          this.page = newPage;
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
