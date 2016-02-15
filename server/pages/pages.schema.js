Schema.Page = new SimpleSchema({
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
  },
  "haveExercise": {
    type: Boolean,
    optional: true
  },
  "forbiddenWords": {
    type: [String],
    optional: true
  },
  "requiredWords": {
    type: [String],
    optional: true
  },
  "startupCode": {
    type: String,
    optional: true
  },
  "startupFileName": {
    type: String,
    optional: true
  },
  "runCommand": {
    type: String,
    optional: true
  },
  "files": {
    type: [{
      "fileName": {
        type: String,
        optional: true
      },
      "fileCode": {
        type: String,
        optional: true
      }
    }],
    optional: true
  }
});
//Pages.attachSchema(Schema.Page);
