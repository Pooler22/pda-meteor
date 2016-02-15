'use strict';
angular.module('pdaApp')
  .directive('courseupdate', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/course/update/course-update.html',
      controllerAs: 'courseupdate',
      controller: function($scope, $state, $reactive, $mdToast, $stateParams) {
        $reactive(this).attach($scope);

        this.subscribe('pages');
        this.subscribe('courses');

        this.helpers({

          course: () => {
            return Courses.findOne({
              "_id": $stateParams.courseId,

            });
          },

          pages: () => {
            return Pages.find({
              "ownerId": $stateParams.courseId
            });
          }
        });

        this.editCourse = () => {
          Courses.update(this.course._id, {
            $set: {
              name: this.course.name,
              description: this.course.description,
              publicAcces: this.course.publicAcces,
            }
          });
        };
         
        this.removeCourse = () => {
          Courses.remove({
            _id: $stateParams.courseId
          });
          this.backToListCourse();
        };

        this.createPage = function() {
          this.newPage.forbiddenWords = ["import"];
          this.newPage.requiredWords = ["class"];
          this.newPage.ownerId = $stateParams.courseId;
          Meteor.call('createPage', this.newPage);
          this.newPage = undefined;
        };

        this.pageObject = {
          name: '',
          description: '',
          haveExercise: '',
          startupCode: '',
          runCommand: '',
          forbiddenWords: '',
          requiredWords: '',
          startupFileName: '',
        };

        this.newFile = {
          fileName: '',
          fileCode: '',
        };

        this.updatePage = (pageObject) => {
          Pages.update(pageObject._id, {
            $set: {
              "name": pageObject.name,
              "description": pageObject.description,
              "haveExercise": pageObject.haveExercise,
              "runCommand": pageObject.runCommand,
              "startupCode": pageObject.startupCode,
              "forbiddenWords": pageObject.forbiddenWords,
              "requiredWords": pageObject.requiredWords,
              "startupFileName": pageObject.startupFileName,
            }
          });
        };

        this.addFile = (pageId, newFile) => {
          console.log("działa");
          console.log(newFile);
          Pages.update(pageId, {
            $push: {
              "files": {
                "fileName": newFile.fileName,
                "fileCode": newFile.fileCode,
              },
            }
          });
          this.newFile = {
            fileName: '',
            fileCode: '',
          };
        };

        this.oldFile = {
          fileName: '',
          fileCode: '',
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

        this.removePage = (pageObjectId) => {
          Pages.remove({
            _id: pageObjectId
          });
        };

        this.backToListCourse = () => {
          $state.go('courseindex');
        };
      }
    };
  });
