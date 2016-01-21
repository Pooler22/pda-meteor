Meteor.startup(function() {
  if (Courses.find().count() === 0) {
    var courses = [{
      'name': 'Fasada',
      'description': 'ang. Fasade',
      'pages': [{
        'title': 'Wstęp',
        'description': 'Fasada – wzorzec projektowy należący do grupy wzorców strukturalnych. Służy do ujednolicenia dostępu do złożonego systemu poprzez wystawienie uproszczonego, uporządkowanego interfejsu programistycznego, który ułatwia jego użycie.'
      }, {
        'title': 'Diagram',
        'description': 'opis1',
      }, {
        'title': 'Zastosowanie',
        'description': 'opis1',
      }, {
        'title': 'Ćwiczenie 1',
        'description': 'opis1',
        'exercise': [{
          'language': 'C++',
          'test': 'test'
        }, {
          'language': 'JavaScript',
          'test': 'test'
        }, {
          'language': 'Java',
          'test': 'test'
        }]
      }, {
        'title': 'Ćwiczenie 1',
        'description': 'opis1',
        'exercise': [{
          'language': 'C++',
          'test': 'test'
        }, {
          'language': 'JavaScript',
          'test': 'test'
        }, {
          'language': 'Java',
          'test': 'test'
        }]
      }, {
        'title': 'Ćwiczenie 2',
        'description': 'opis1',
        'exercise': [{
          'language': 'C++',
          'test': 'test'
        }, {
          'language': 'JavaScript',
          'test': 'test'
        }, {
          'language': 'Java',
          'test': 'test'
        }]
      }, {
        'title': 'Ćwiczenie 3',
        'description': 'opis1',
        'exercise': [{
          'language': 'C++',
          'test': 'test'
        }, {
          'language': 'JavaScript',
          'test': 'test'
        }, {
          'language': 'Java',
          'test': 'test'
        }]
      }, {
        'title': 'Podsumowanie',
        'description': 'opis1',
      }, {
        'title': 'Projekt',
        'description': 'Zadanie',
        'exercise': [{
          'language': 'C++',
          'test': 'test'
        }, {
          'language': 'JavaScript',
          'test': 'test'
        }, {
          'language': 'Java',
          'test': 'test'
        }]
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
