'use strict';

Pages = new Mongo.Collection('pages');

Pages.allow({
  insert: function(userId, page) {
    page.name_sort = page.name.toLowerCase();
    return !!userId;
  },
  update: function(userId, page, fields, modifier) {
    return !!userId;
  },
  remove: function(userId, page) {
    return !!userId;
  }
});
