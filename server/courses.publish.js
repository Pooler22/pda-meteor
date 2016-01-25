'use strict'

Meteor.publish('courses', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfCourses', Courses.find(where), {
    noReady: true
  });
  return Courses.find(where, options);
});


Meteor.publish('pages', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfPages', Pages.find(where), {
    noReady: true
  });
  return Pages.find(where, options);
});
