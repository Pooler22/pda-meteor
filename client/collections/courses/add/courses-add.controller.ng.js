'use strict';

angular.module('pdaApp')
  .controller('CourseAddController', function($scope,
    $state, $reactive, $mdToast) {
    $reactive(this).attach($scope);

    $scope.save = function() {
      if (this.form.$valid) {
        Meteor.call('addCourse', this.getReactively('newCourse'), function(
          error, id) {
          if (error) {
            $mdToast.show($mdToast.simple().textContent(error.reason));
          } else {
            $mdToast.show($mdToast.simple().textContent("Kurs dodany"));
            $state.go('courses-edit', {
              courseId: id
            });
          }
        });
      }
    };
  });
