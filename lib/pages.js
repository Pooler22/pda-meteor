Pages = new Mongo.Collection('pages');

Pages.allow({
  insert: function(userId, page) {
    return !!userId;
  },
  update: function(userId, page, fields, modifier) {
    return !!userId;
  },
  remove: function(userId, page) {
    return !!userId;
  }
});

Meteor.methods({
  pages: function(courseId) {
    return Courses.findOne(courseId).pageIds;
  },

  createPage: function(newPage) {
    return Pages.insert(newPage);
  },

  updatePage: function(courseId, newPageData) {
    return Courses.update({
      "_id": courseId,
      "pages.id": newPageData.id
    }, {
      $set: {
        "pages.name": newPageData.name,
        "pages.description": newPageData.description,
      }
    });
  },
});