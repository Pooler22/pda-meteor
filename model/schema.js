CoursesSchema = new SimpleSchema({
  "_id": {
    type: Meteor.ObjectID
  },
  "name": {
    type: String,
    max: 20,
  },
  "description": {
    type: String,
  },
  "languages": {
    type: [String],
    optional: true
  },
  "publicAcces": {
    type: Boolean,
    optional: true
  },
});

Courses.attachSchema(CoursesSchema);


PagesSchema = new SimpleSchema({
  "_id": {
    type: Meteor.ObjectID
  },
  "name": {
    type: String,
    max: 20,
  },
  "description": {
    type: String,
  },
  "ownerId": {
    type: Meteor.ObjectID,
    optional: true
  }
});

Pages.attachSchema(PagesSchema);

ExercisesSchema = new SimpleSchema({
  "_id": {
    type: Meteor.ObjectID
  },
  "name": {
    type: String,
  },
  "language": {
    type: String,
    optional: true
  },
  "description": {
    type: String,
  },
  "startupCode": {
    type: String,
    optional: true
  },
  "ownerId": {
    type: Meteor.ObjectID,
    optional: true
  },
  "courseId": {
    type: Meteor.ObjectID,
    optional: true
  }

});

Exercises.attachSchema(ExercisesSchema);
