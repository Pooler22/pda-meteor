'use strict';
angular.module('pdaApp')
  .directive('courseindex', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/course/index/course-index.html',
      controllerAs: 'courseindex',
      controller: function($scope, $reactive, $state, $mdToast, $filter) {
        $reactive(this).attach($scope);

        this.perPage = 3;
        this.page = 1;
        this.sort = {
          name: 1
        };
        this.orderProperty = '1';
        this.searchText = '';

        // to do: test function
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
        // to do: test function
        this.helpers({
          // to do: test function
          coursesCount: () => {
            return Counts.get('numberOfCourses');
          },
          // to do: test function
          courses: () => {
            return Courses.find({}, {
              sort: this.getReactively('sort')
            });
          },
          // to do: test function
          coursesCount: () => {
            return Counts.get('numberOfCourses');
          },
          // to do: test function
          isAdmin: () => {
            console.log("admin" + Meteor.user().profile.roles);
            return Meteor.user().profile.roles == "Admin";
          }
        });
        // to do: test function
        this.updateSort = () => {
          console.log(this.orderProperty);
          this.sort = {
            name: parseInt(this.orderProperty)
          };
        };
        // to do: test function
        this.pageChanged = (newPage) => {
          this.page = newPage;
        };
        // to do: test function
        this.updateSort = () => {
          this.sort = {
            name: parseInt(this.orderProperty)
          };
        };
        // to do: test function
        this.pageChanged = (newPage) => {
          this.page = newPage;
        };
        // to do: test function
        this.startCourse = (course) => {
          $state.go('courseshow', {
            courseId: course
          });
        };
        // to do: test function
        this.editCourse = (course) => {
          $state.go('courseupdate', {
            courseId: course
          });
        };
      }
    };
  });
