'use strict';
Meteor.startup(function() {
  //load default courses
  if (Courses.find().count() === 0) {
    var courses = [{
      "name": "Fasada",
      "description": "ang. Fasade",
      "publicAcces": true
    }];

    var pages = [
      [{
        "name": "Wstęp",
        "description": "opis...",
        "haveExercise": false
      }, {
        "name": "Ćwiczenie 1",
        "description": "Zaprojektuj klasę Fasade, która będzie posiadać argument klasy Element1 oraz Element2, do tworzenia instancji tyych obiektów użyj metody .getInstance() Zaprojektuj funkcję fun1(), fun2(), fun3()",
        "haveExercise": true,
        "forbiddenWords": ["import", "while", "if", "switch"],
        "requiredWords": ["Fasade", "fun1()", "fun2()", "fun3()"],
        "startupCode": "package Fasade;\r\n\r\nclass Fasade {\r\n	private Element1 e1;\r\n	private Element2 e2;\r\n\r\n	public Fasade() {\r\n		e1 = Element1.getInstance();\r\n		e2 = Element2.getInstance();\r\n	}\r\n\r\n	public void fun1() {\r\n		e1.setId(1);\r\n	}\r\n\r\n	public void fun2() {\r\n		e2.setId(1);\r\n	}\r\n\r\n	public void fun3() {\r\n		e1.setId(1);\r\n		e2.setId(1);\r\n	}\r\n}",
        "startupFileName": "Fasade.java",
        "files": [{
          "fileName": "TestFasade.java",
          "fileCode": "package Fasade;\r\n\r\nclass ClassicSingleton {\r\n	private static ClassicSingleton instance = null;\r\n\r\n	protected ClassicSingleton() {\r\n		// Exists only to defeat instantiation.\r\n	}\r\n\r\n	public static ClassicSingleton getInstance() {\r\n		if (instance == null) {\r\n			instance = new ClassicSingleton();\r\n		}\r\n		return instance;\r\n	}\r\n}\r\n\r\nclass Element1 {\r\n	private static Element1 instance = null;\r\n	int id;\r\n\r\n	public static Element1 getInstance() {\r\n		if (instance == null) {\r\n			instance = new Element1();\r\n		}\r\n		return instance;\r\n	}\r\n\r\n	public void setId(int value) {\r\n		id = value;\r\n	}\r\n}\r\n\r\nclass Element2 {\r\n	private static Element2 instance = null;\r\n	int id;\r\n\r\n	public static Element2 getInstance() {\r\n		if (instance == null) {\r\n			instance = new Element2();\r\n		}\r\n		return instance;\r\n	}\r\n\r\n	public void setId(int value) {\r\n		id = value;\r\n	}\r\n}\r\n\r\npublic class TestFasade {\r\n	\r\n	public static boolean testFun1() {\r\n		Element1 e1 = Element1.getInstance();\r\n		Element2 e2 = Element2.getInstance();\r\n		Fasade fasade = new Fasade();\r\n\r\n		fasade.fun1();\r\n\r\n		return ((e1.id == 0) && (e2.id == 1));\r\n	}\r\n\r\n	public static boolean testFun2() {\r\n		Element1 e1 = Element1.getInstance();\r\n		Element2 e2 = Element2.getInstance();\r\n		Fasade fasade = new Fasade();\r\n\r\n		fasade.fun2();\r\n\r\n		return ((e1.id == 1) && (e2.id == 0));\r\n	}\r\n\r\n	public static boolean testFun3() {\r\n		Element1 e1 = Element1.getInstance();\r\n		Element2 e2 = Element2.getInstance();\r\n		Fasade fasade = new Fasade();\r\n\r\n		fasade.fun1();\r\n\r\n		return ((e1.id == 0) && (e2.id == 0));\r\n	}\r\n	\r\n	public static void main(String[] args) {\r\n		if (TestFasade.testFun1()) {\r\n			System.out.println(\"Funkcja 1 nie działa prawidłowo\");\r\n		}\r\n		\r\n		else if (TestFasade.testFun2()) {\r\n			System.out.println(\"Funkcja 2 nie działa prawidłowo\");\r\n		}\r\n		\r\n		else if (TestFasade.testFun3()) {\r\n			System.out.println(\"Funkcja 3 nie działa prawidłowo\");\r\n		}\r\n		else {\r\n			System.out.println(\"Gratulacje!\");\r\n		}\r\n	}\r\n\r\n}"
        }]
      }]
    ];

    var tmpIdCourse;
    for (var i = 0; i < courses.length; i++) {
      tmpIdCourse = Courses.insert(courses[i]);
      for (var j = 0; j < pages[i].length; j++) {
        pages[j].ownerId = tmpIdCourse;
        Pages.insert(pages[j]);
      }
    }
    // load default user
    var credentials = {
      email: 'a@a.com',
      password: 'asdasdasd'
    };

    Accounts.createUser(credentials);
  }
});
