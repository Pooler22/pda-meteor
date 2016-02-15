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


        this.subscribe('courses', () => {
          return [{
              limit: parseInt(this.perPage),
              skip: parseInt((this.getReactively('page') - 1) * this.perPage),
              sort: this.getReactively('sort')
            },
            this.getReactively('searchText')
          ];
        });

        this.helpers({

          coursesCount: () => {
            return Counts.get('numberOfCourses');
          },

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

        this.updateSort = () => {
          console.log(this.orderProperty);
          this.sort = {
            name: parseInt(this.orderProperty)
          };
        };

        this.pageChanged = (newPage) => {
          this.page = newPage;
        };

        this.updateSort = () => {
          this.sort = {
            name: parseInt(this.orderProperty)
          };
        };

        this.pageChanged = (newPage) => {
          this.page = newPage;
        };

        this.startCourse = (course) => {
          $state.go('courseshow', {
            courseId: course
          });
        };

        this.editCourse = (course) => {
          $state.go('courseupdate', {
            courseId: course
          });
        };
      }
    };
  });
