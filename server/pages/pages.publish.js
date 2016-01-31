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
