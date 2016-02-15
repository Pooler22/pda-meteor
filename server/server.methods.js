
Meteor.startup(function() {
  Meteor.methods({
    runCode: function(userCode) {
      var Future = Npm.require("fibers/future");
      var exec = Npm.require("child_process").exec;
      // This method call won't return immediately, it will wait for the
      // asynchronous code to finish, so we call unblock to allow this client
      // to queue other method calls (see Meteor docs)
      this.unblock();
      var future = new Future();
      var command = userCode;
      exec(command, function(error, stdout, stderr) {
        if (error) {
          future.return(stdout.toString());

        } else {
          future.return(stdout.toString());
        }
      });
      return future.wait();
    },

    prepareStructure: function(courseId, UserId) {
      var fs = Npm.require('fs');
      var pages = Pages.find({
        "ownerId": courseId,
        "haveExercise": true
      }).fetch();
      var startPath = process.env.PWD + "/.usersCodes/" + courseId +
        "/";

      for (var i = 0; i < pages.length; i++) {
        var uniquePath = pages[i]._id + "/" + UserId + "/";
        var filePath = startPath + uniquePath;
        Meteor.call('runCode', "mkdir -p " + filePath);

        for (var j = 0; j < pages[i].files.length; j++) {
          fs.writeFileSync(filePath + pages[i].files[j].fileName,
            pages[i].files[j].fileCode, 'utf8');
        }
        return true;
      }
    },

    checkCode: function(courseId, pageId, UserId, codeToTest) {
      var fs = Npm.require('fs');
      var filePath = process.env.PWD + "/.usersCodes/" + courseId +
        "/" + pageId + "/" + UserId + "/";

      fs.writeFileSync(filePath + Pages.findOne(pageId).startupFileName,
        codeToTest, 'utf8');

      var respons;
      respons = Meteor.call('runCode', "cd " + filePath +
        "&& javac -cp .:\"" +
        process.env.PWD +
        "/.usersCodes/junit/junit.jar\" " +
        "*.java");

      if (respons === "") {
        respons += Meteor.call('runCode', "cd " + filePath +
          " && java -cp .:\"" + process.env.PWD +
          "\"/.usersCodes/junit/* org.junit.runner.JUnitCore " +
          Pages.findOne(pageId).runCommand);
      } else {
        //respons = respons.replace(" Command failed: " + filePath,
        //  " ");
      }
      return respons;
    },

  });
});
