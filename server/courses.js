Meteor.methods({
  addCourse: function(newCourse) {
    newCourse.pages = [];
    return Courses.insert(newCourse);
  }
});
