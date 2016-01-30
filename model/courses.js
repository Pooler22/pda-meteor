'use strict';

Courses = new Mongo.Collection('courses');

Courses.allow({
  insert: function(userId, course) {
    course.name_sort = course.name.toLowerCase();
    Meteor.call('initCourseFiles', course._id);
    return !!userId;
  },
  update: function(userId, course, fields, modifier) {
    return !!userId;
  },
  remove: function(userId, course) {
    return !!userId;
  }
});

Meteor.methods({
  course: function(courseAttributes) {
    var user = Meteor.user(),
      courseWithSameLink = Courses.findOne({
        _id: courseAttributes._id
      });
    return courseId;
  },

  coursePages: function(courseId) {
    var tmp = Courses.findOne(courseId).pageIds;
    var tmp2 = [];
    var val;
    for (val in tmp) {
      tmp2.push({
        _id: Pages.findOne(val)
      });
    }
    return tmp;
  },

  createPage: function(courseId, newPage) {
    newPage.ownerId = courseId;
    Pages.insert(newPage);
    return true;
  },

  editPage: function(courseId, newPageData) {
    Courses.update({
      "_id": courseId,
      "pages.id": newPageData.id
    }, {
      $set: {
        "pages.name": newPageData.name,
        "pages.description": newPageData.description,
      }
    });
    return true;
  },
});
