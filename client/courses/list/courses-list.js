'use strict';
angular.module('pdaApp')
  .directive('courseslist', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/courses/list/courses-list.html',
      controllerAs: 'courseslist',
      controller: function($scope, $reactive, $state, $mdToast) {
        $reactive(this).attach($scope);

        this.page = 1;
        this.perPage = 3;
        this.sort = {
          name_sort: 1
        };
        this.orderProperty = '1';

        //to do: repair subscribe
        this.subscribe('courses', () => {
          return [{
              limit: parseInt(this.perPage),
              skip: parseInt((this.getReactively('page') - 1) * this.perPage),
              sort: this.getReactively('sort')
            },
            this.getReactively('searchText')
          ];
        });

        this.updateSort = () => {
          this.sort = {
            name: parseInt(this.orderProperty)
          };
        };

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
      }
    };
  });
