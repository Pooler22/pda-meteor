'use strict';

angular.module('pdaApp')
  .directive('coursecreate', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/course/create/course-create.html',
      controllerAs: 'coursecreate',
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
              $state.go('courseupdate', {
                courseId: id
              });
            }
          });
        };

        $scope.backToListCourse = function() {
          $state.go('courseindex');
        };
      }
    };
  });
