Exercises = new Mongo.Collection('exercises');

Exercises.allow({
  insert: function(userId, exercise) {
    exercise.name_sort = exercise.name.toLowerCase();
    return true;
  },
  update: function(userId, exercise, fields, modifier) {
    return true;
  },
  remove: function(userId, exercise) {
    return true;
  }
});
