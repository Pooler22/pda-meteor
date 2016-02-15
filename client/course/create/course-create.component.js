'use strict';

angular.module('pdaApp')
  .directive('coursecreate', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/course/create/course-create.html',
      controllerAs: 'coursecreate',
      controller: function($scope, $state, $reactive, $mdToast) {
        $reactive(this).attach($scope);

        this.newCourse = {
          name:'',
          description:'',
          publicAcces:false,
        };
         
        this.save = () => {
          Meteor.call('addCourse', this.getReactively('newCourse'), (err, id) => {
            if (err) {
              $mdToast.show($mdToast.simple().textContent(err.reason));
            } else {
              $mdToast.show($mdToast.simple().textContent("Kurs dodany"));
              this.goToEditCoursePage(id);
            }
          });
        };
         
        this.goToEditCoursePage = (id) =>{
          $state.go('courseupdate', {
            courseId: id
          });
        };
         
        this.backToListCourse = () => {
          $state.go('courseindex');
        };
      }
    };
  });
