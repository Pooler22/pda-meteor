Courses = new Mongo.Collection('courses');

Courses.allow({
  insert: function(userId, course) {
    course.name_sort = course.name.toLowerCase();
    return true;
  },
  update: function(userId, course, fields, modifier) {
    return true;
  },
  remove: function(userId, course) {
    return true;
  }
});

Meteor.methods({
  course: function(courseAttributes) {
    var user = Meteor.user(),
      courseWithSameLink = Courses.findOne({
        _id: courseAttributes._id
      });
    return courseId;
  },

  coursePages: function(courseId) {

    var tmp = Courses.findOne(courseId)["pageIds"];
    var tmp2 = [];

    var val;
    for (val in tmp) {
      tmp2.push({
        _id: Pages.findOne(val)
      });
    }

    return tmp;

    //
    // return Courses.find({
    //   _id: courseId
    // }, {
    //   fields: {
    //     pages: true
    //   }
    // }).map(function(block) {
    //   var tmp2 = [];
    //   for (var i = 0; i < block.pages.length; i++) {
    //     tmp2.push({
    //       _id: Pages.findOne(block.pages[i])
    //     });
    //   }
    //   return tmp2;
    // });
  },

  createPage: function(courseId, newPage) {
    newPage.ownerId = courseId;
    Pages.insert(newPage);
    // Courses.update({
    //   "_id": courseId
    // }, {
    //   $push: {
    //     "pageIds":
    //   }
    // });
    return true;
  },

  editPage: function(courseId, newPageData) {
    Courses.update({
      "_id": courseId,
      "pages.id": newPageData.id
    }, {
      $set: {
        "pages.name": newPageData.name,
        "pages.description": newPageData.description,
      }
    });
    return true;
  },



});
