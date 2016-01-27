'use strict'

angular.module('pdaApp')
  .controller('CourseEditCtrl', function($scope, $stateParams,
    $state) {
    $scope.subscribe('courses');
    $scope.subscribe('pages');
    $scope.subscribe('exercises');

    $scope.helpers({
      course: () => {
        return Courses.findOne($stateParams.courseId);
      },
      coursePages: () => {
        return Pages.find({
          "ownerId": $stateParams.courseId
        });
      },
      correctExercise: () => {
        return Exercises.find($stateParams.courseId);
      }
    });

    $scope.correctExercise = function() {
      return Exercises.find();
    };

    $scope.checkSelectedPage = function() {
      return $scope.selectedIndex < $scope.coursePages.length;
    };

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
      Meteor.call('createPage', $scope.course._id, $scope.newPage);
      $scope.newPage = undefined;
    };

    $scope.editPage = function(pageObject) {
      Pages.update(pageObject._id, {
        $set: {
          "name": pageObject.name,
          "description": pageObject.description,
        }
      });
    };

    $scope.removePage = function(pageObjectId) {
      //todo remove id owner from exercise
      Pages.remove({
        _id: pageObjectId
      });
    };

    $scope.createExercise = function(pageId, exerciseObject) {
      exerciseObject.ownerId = pageId;
      exerciseObject.courseId = $stateParams.courseId;
      Exercises.insert(exerciseObject);
      $scope.newExercise = undefined;
    };

    $scope.editExercise = function(exerciseObject) {
      Exercises.update(exerciseObject._id, {
        $set: {
          "name": exerciseObject.name,
          "description": exerciseObject.description,
        }
      });
    };

    $scope.removeExercise = function(exerciseObjectId) {
      //todo remove id owner from exercise
      Exercises.remove({
        _id: exerciseObjectId
      });
    };

    $scope.backToListCourse = function() {
      $state.go('courses-list');
    };

  });
