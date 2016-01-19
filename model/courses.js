Courses = new Mongo.Collection('courses');

Courses.allow({
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
