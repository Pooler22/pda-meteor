Meteor.startup(function() {
  if (Courses.find().count() === 0) {
    var courses = [{
      'name': 'Fasada',
      'description': 'ang. Fasade'
    }, {
      'name': 'Adapter',
      'description': 'ang. Wrapper'
    }];

    for (var i = 0; i < courses.length; i++) {
      Courses.insert(courses[i]);
    }
  }
});
