'use strict'

angular.module('pdaApp')
  .controller('CourseEditCtrl', function($scope, $stateParams,
    $state) {
    $scope.subscribe('courses');
    $scope.subscribe('pages');

    $scope.helpers({
      course: () => {
        var course = Courses.findOne($stateParams.courseId);
        //var pages = course.pageIds;
        //course.pages = pages;
        console.log(course);
        return course;
      },
      coursePages: () => {
        var pages = Pages.find({
          "ownerId": $stateParams.courseId
        });
        console.log(pages);
        return pages;
        //console.log($stateParams);
        //var tmp1 = Courses.findOne($stateParams.courseId);
        //var tmp = $scope.course.pageIds;
        //var tmp2 = [];
        //for (var i = 0; i < tmp.length; ++i) {
        //  tmp2.push(Pages.findOne(tmp[i]));
        //}
        //return Meteor.call('coursePages', $stateParams.courseId);
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

    $scope.backToListCourse = function() {
      $state.go('courses-list');
    };

    function pagesLength() {
      return $scope.course.pages.length;
    }

    $scope.createPage = function() {
      //$scope.newPage.id = pagesLength() + 1;
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
      //console.log($scope.course._id);
      //console.log(pageObject);
      //console.log($scope.course.pag[pageId]);
      //Meteor.call('editPage', $scope.course._id, pageObject);
    };

    $scope.removePage = function(pageObjectId) {
      //todo remove id owner from exercise
      Pages.remove({
        _id: pageObjectId
      });
    };


  });
