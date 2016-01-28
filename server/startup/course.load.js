Meteor.startup(function() {
  if (Courses.find().count() === 0) {
    var courses = [];

    for (var i = 0; i < courses.length; i++) {
      Courses.insert(courses[i]);
    }
  }
});
