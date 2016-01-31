CoursesSchema = new SimpleSchema({
  "_id": {
    type: Meteor.ObjectID
  },
  "name": {
    type: String,
    max: 20,
  },
  "name_sort":{
    type: String,
    max: 20,
    optional: true
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
//Courses.attachSchema(CoursesSchema);
