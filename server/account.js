Accounts.onCreateUser(function(options, user) {
    user.profile = options.profile || {};
    user.profile.firstName = options.firstName;
    user.profile.lastName = options.lastName;
    return user;
});
