'use strict';

angular.module('pdaApp')
  .controller('CourseAddController', function($scope,
    $state, $reactive, $mdToast) {
    $reactive(this).attach($scope);

    $scope.save = function() {
      if (this.form.$valid) {
        if(this.getReactively('newCourse').publicAcces !== true){
          this.getReactively('newCourse').publicAcces = false;
        }
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

    $scope.backToListCourse = function() {
      $state.go('courses-list');
    };
  });
