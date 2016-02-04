'use strict';
angular.module('pdaApp')
  .directive('courseupdate', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/course/update/course-update.html',
      controllerAs: 'courseupdate',
      controller: function($scope, $state, $reactive, $mdToast, $stateParams) {
        $reactive(this).attach($scope);
        // to do: test function
        this.subscribe('pages');
        this.subscribe('courses');
        // to do: test function
        this.helpers({
          // to do: test function
          course: () => {
            return Courses.findOne({
              "_id": $stateParams.courseId,
              "publicAcces": true
            });
          },
          // to do: test function
          pages: () => {
            return Pages.find({
              "ownerId": $stateParams.courseId
            });
          }
        });
        // to do: test function
        this.editCourse = () => {
          Courses.update(this.course._id, {
            $set: {
              name: this.course.name,
              description: this.course.description,
              publicAcces: this.course.publicAcces,
            }
          });
        };
        //todo remove id owner from pages and exercise
        // to do: test function
        this.removeCourse = () => {
          Courses.remove({
            _id: $stateParams.courseId
          });
          this.backToListCourse();
        };
        // to do: test function
        this.createPage = function() {
          this.newPage.forbiddenWords = ["import"];
          this.newPage.requiredWords = ["class"];
          this.newPage.ownerId = $stateParams.courseId;
          Meteor.call('createPage', this.newPage);
          this.newPage = undefined;
        };
        // to do: test function
        this.pageObject = {
          name:'',
          description:'',
          haveExercise:'',
          startupCode:'',
          forbiddenWords:'',
          requiredWords:'',
          startupFileName:'',
        };
        this.updatePage = (pageObject) => {
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
        // to do: test function
        this.newFile ={
          fileName:'',
          fileCode:'',
        };
        this.addFile = (pageId, newFile) => {
          Pages.update(pageId, {
            $push: {
              "files": {
                "fileName": newFile.fileName,
                "fileCode": newFile.fileCode,
              },
            }
          });
        };
        // to do: test function
        this.oldFile ={
          fileName:'',
          fileCode:'',
        };
        this.removeFile = (pageId, oldFile) => {
          Pages.update(pageId, {
            $unset: {
              "files": {
                "fileName": oldFile.fileName,
                "fileCode": oldFile.fileCode
              }
            }
          });
        };
        // to do: test function
        this.removePage = (pageObjectId) => {
          Pages.remove({
            _id: pageObjectId
          });
        };
        // to do: test function
        this.backToListCourse = () => {
          $state.go('courseindex');
        };
      }
    };
  });
