ExercisesSchema = new SimpleSchema({
  "name": {
    type: String,
    max: 20,
  },
  "description": {
    type: String,
  }
});
Exercises.attachSchema(ExercisesSchema);

PagesSchema = new SimpleSchema({
  "name": {
    type: String,
    max: 20,
  },
  "description": {
    type: String,
  },
  "exercises": {
    type: String,
    optional: true
  }
});
Pages.attachSchema(PagesSchema);

CoursesSchema = new SimpleSchema({
  "name": {
    type: String,
    max: 20,
  },
  "description": {
    type: String,
  },
  "isPublic": {
    type: Boolean,
  },
  "pages": {
    type: [String],
    optional: true
  }
});
Courses.attachSchema(CoursesSchema);
