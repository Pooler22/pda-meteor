'use strict';

angular.module('pdaApp')
  .directive('coursesadd', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/courses/add/courses-add.html',
      controllerAs: 'coursesadd',
      controller: function($scope, $state, $reactive, $mdToast) {
        $reactive(this).attach($scope);

        $scope.save = function() {
          this.getReactively('newCourse').publicAcces = !!this.getReactively('newCourse').publicAcces;

          Meteor.call('addCourse', this.getReactively('newCourse'), function(
            error, id) {
            if (error) {
              $mdToast.show($mdToast.simple().textContent(error.reason));
            } else {
              $mdToast.show($mdToast.simple().textContent("Kurs dodany"));
              $state.go('coursesedit', {
                courseId: id
              });
            }
          });
        };

        $scope.backToListCourse = function() {
          $state.go('courseslist');
        };
      }
    };
  });