'use strict'

angular.module('pdaApp')
  .controller('CourseEditCtrl', function($scope, $stateParams,
    $state) {
    $scope.subscribe('courses');
    $scope.subscribe('pages');

    $scope.helpers({
      course: () => {
        return Courses.findOne($stateParams.courseId);
      },
      coursePages: () => {
        return Pages.find({
          "ownerId": $stateParams.courseId
        });
      }
    });

    $scope.editCourse = function() {
      Courses.update($scope.course._id, {
        $set: {
          name: $scope.course.name,
          description: $scope.course.description,
          publicAcces: $scope.course.publicAcces,
        }
      });
    };

    $scope.removeCourse = function() {
      //todo remove id owner from pages and exercise
      Courses.remove({
        _id: $stateParams.courseId
      });
      $scope.backToListCourse();
    };

    $scope.createPage = function() {
      $scope.newPage.forbiddenWords = ["import"];
      $scope.newPage.requiredWords = ["class"];
      Meteor.call('createPage', $scope.course._id, $scope.newPage);
      $scope.newPage = undefined;
    };

    $scope.editPage = function(pageObject) {
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
      $state.go('courses-list');
    };

  });
