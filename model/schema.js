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
  },
  "pageIds": {
    type: [Meteor.ObjectID],
    optional: true
  }

});

//Courses.attachSchema(CoursesSchema);


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
  }
});

//Pages.attachSchema(PagesSchema);

//
// "pages": {
//   type: [{
//     "name": {
//       type: String,
//       max: 20,
//       optional: true
//     },
//     "description": {
//       type: String,
//       optional: true
//     },
//     "exercises": {
//       type: [{
//         "name": {
//           type: String,
//           max: 20,
//         },
//         "language": {
//           type: String,
//           max: 20,
//         },
//         "description": {
//           type: String,
//         }
//       }],
//       optional: true
//     }
//   }],
//   optional: true
// }
