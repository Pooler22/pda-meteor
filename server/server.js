Meteor.startup(function() {
  // Load future from fibers
  var Future = Npm.require("fibers/future");
  // Load exec
  var exec = Npm.require("child_process").exec;

  function selectSerializer(expression) {
    switch (expression) {
      case "javascript":
        return "java";
      case 'c++':
        return "gcc";
      default:
        return "none";
    }
  }

  // Server methods
  Meteor.methods({
    testCode: function(userCode, language) {
      var serializerPath = selectSerializer(language);
      runCode(serializerPath + ' ' + userCode);

    },

    runCode: function(userCode) {
      // This method call won't return immediately, it will wait for the
      // asynchronous code to finish, so we call unblock to allow this client
      // to queue other method calls (see Meteor docs)
      this.unblock();
      var future = new Future();
      var command = userCode;
      exec(command, function(error, stdout, stderr) {
        if (error) {
          console.log(error);
          throw new Meteor.Error(500, command + " failed");
        }
        future.return(stdout.toString());
      });
      return future.wait();
    }
  });
});
