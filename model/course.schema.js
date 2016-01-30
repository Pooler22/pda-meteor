'use strict';

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
  "publicAcces": {
    type: Boolean,
    optional: true
  },
  "languages": {
    type: [String],
    optional: true
  },
});
Courses.attachSchema(CoursesSchema);
