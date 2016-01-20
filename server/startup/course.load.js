Meteor.startup(function() {
  if (Courses.find().count() === 0) {
    var courses = [{
      'name': 'Fasada',
      'description': 'ang. Fasade',
      'pages': [{
        'title': 'Wstęp',
        'description': 'opis',
        'exercise': [{
          'language': 'C++',
          'test': 'test'
        }]
      }, {
        'title': 'Rozdział 1',
        'description': 'opis1',
      }]
    }, {
      'name': 'Adapter',
      'description': 'ang. Wrapper',
      'pages': [{
        'title': 'Wstęp',
        'description': 'opis',
      }, {
        'title': 'Rozdział 1',
        'description': 'opis1',
      }]
    }];

    for (var i = 0; i < courses.length; i++) {
      Courses.insert(courses[i]);
    }
  }
});
