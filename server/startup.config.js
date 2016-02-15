Meteor.startup(function() {
  if (Courses.find().count() === 0) {

    var courses = [{
      "name": "Fasada",
      "description": "z ang. Facade",
      "publicAcces": true
    }];

    var pages = [
      [{
        "name": "Ćwiczenie",
        "description": "Utwórz klasę Facade, która będzie posiadać dwa pola, jedno z elementem klasy Element, drugie z elementem klasy ElementExt. \nDo utworzenia obiektów klasy użyj statycznych metod getInstance() zamiast konstruktorów.\nKlasa ta ma posiadać trzy metody publiczne: SetOnly1(int i) - która będzie ustawiać identyfikator obiektu klasy Element, SetOnly2(int i) - która będzie ustawiać identyfikator obiektu klasy ElementExt, SetBoth(int i) - która będzie ustawiać identyfikatory obu obiektów klasy Element i ElementExt. \nDo ustawienia wartości identyfikatorów użyj funkcji setId(int i).",
        "forbiddenWords": [
          "for",
          "if",
          "while"
        ],
        "requiredWords": [
          "Facade",
          "SetOnly1",
          "SetOnly2",
          "SetBoth"
        ],
        "startupCode": "class Facade {\n\tprivate Element e1;\n\tprivate ElementExt e2;\n\n\tpublic Facade() {\n\t\te1 = Element.getInstance();\n\t\te2 = ElementExt.getInstance();\n\t}\n\n\tpublic void SetOnly1(int i) {\n\t\te1.setId(i);\n\t}\n\n\tpublic void SetOnly2(int i) {\n\t\te2.setId(i);\n\t}\n\n\tpublic void SetBoth(int i) {\n\t\te1.setId(i);\n\t\te2.setId(i);\n\t}\n}",
        "startupFileName": "Facade.java",
        "runCommand": "FacadeTest",
        "haveExercise": true
      }]
    ];
    var tmpId;
    for (var i = 0; i < courses.length; i++) {
      tmpId = Courses.insert(courses[i]);
      for (var j = 0; j < pages[i].length; j++) {
        pages[i][j].ownerId = tmpId;
        Pages.insert(pages[i][j]);
      }
    }

    var credentials = {
      firstName: "Administracja",
      lastName: "Administracja",
      email: 'a@a.com',
      password: 'asdasdasd',
      roles: 'Admin'
    };
    Accounts.createUser(credentials);
  }
});
