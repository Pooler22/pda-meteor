Meteor.publish('users', function() {
    var currentUser;
    currentUser = this.userId;
    if (currentUser) {
        return Meteor.users.find({
            _id: currentUser
        }, {
            fields: {
                "emails": 1,
                "profile": 1,
            }
        });
    } else {
        return this.ready();
    }
});
