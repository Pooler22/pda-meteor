Exercises = new Mongo.Collection('exercises');

Exercises.allow({
  insert: function(userId, thing) {
    thing.name_sort = thing.name.toLowerCase();
    return true;
  },
  update: function(userId, thing, fields, modifier) {
    thing.name_sort = thing.name.toLowerCase();
    return true;
  },
  remove: function(userId, thing) {
    return true;
  }
});

Meteor.methods({
  exercise: function(exerciseAttributes) {
    var user = Meteor.user(),
      exerciseWithSameLink = Exercises.findOne({
        _id: exerciseAttributes._id
      });
    return exerciseId;
  }
});
