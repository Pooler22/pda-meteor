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
});