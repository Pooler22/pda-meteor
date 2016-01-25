Pages = new Mongo.Collection('pages');

Pages.allow({
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
  page: function(pageAttributes) {
    var user = Meteor.user(),
      pageWithSameLink = Pages.findOne({
        _id: pageAttributes._id
      });
    return pageId;
  }
});
