'use strict';
angular.module('pdaApp')
  .directive('courseupdate', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/course/update/course-update.html',
      controllerAs: 'courseupdate',
      controller: function($scope, $state, $reactive, $mdToast, $stateParams) {
    $reactive(this).attach($scope);

      $scope.subscribe('pages');
        $scope.subscribe('courses');

    $scope.helpers({
      course: () => {
        return Courses.findOne({"_id":$stateParams.courseId,"publicAcces":true});
      },
        pages: () => {
        return Pages.find({
          "ownerId": $stateParams.courseId
        });
      }
    });

    $scope.editCourse = function() {
      Courses.update(this.course._id, {
        $set: {
          name: this.course.name,
          description: this.course.description,
          publicAcces: this.course.publicAcces,
        }
      });
    };

    $scope.removeCourse = function() {
      //todo remove id owner from pages and exercise
      Courses.remove({
        _id: $stateParams.courseId
      });
      this.backToListCourse();
    };

    $scope.createPage = function() {
      this.newPage.forbiddenWords = ["import"];
      this.newPage.requiredWords = ["class"];
      this.newPage.ownerId = $stateParams.courseId;
      Meteor.call('createPage', this.newPage);
      this.newPage = undefined;
    };

    $scope.updatePage = function(pageObject) {
      Pages.update(pageObject._id, {
        $set: {
          "name": pageObject.name,
          "description": pageObject.description,
          "haveExercise": pageObject.haveExercise,
          "startupCode": pageObject.startupCode,
          "forbiddenWords": pageObject.forbiddenWords,
          "requiredWords": pageObject.requiredWords,
          "startupFileName": pageObject.startupFileName,
        }
      });
    };

    $scope.addFile = function(pageId, newFile) {
      Pages.update(pageId, {
        $push: {
          "files": {
            "fileName": newFile.fileName,
            "fileCode": newFile.fileCode,
          },
        }
      });
    };

    $scope.removeFile = function(pageId, oldFile) {
      Pages.update(pageId, {
        $unset: {
          "files": {
            "fileName": oldFile.fileName,
            "fileCode": oldFile.fileCode
          }
        }
      });
    };

    $scope.removePage = function(pageObjectId) {
      //todo remove id owner from exercise
      Pages.remove({
        _id: pageObjectId
      });
    };

    $scope.backToListCourse = function() {
      $state.go('courseindex');
    };
}
};
  });
