Pages = new Mongo.Collection('pages');

PagesSchema = new SimpleSchema({
  "name": {
    type: String,
    max: 20,
  },
  "description": {
    type: String,
  }
});

Pages.attachSchema(PagesSchema);

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
