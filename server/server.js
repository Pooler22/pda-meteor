Meteor.startup(function() {
  // Server methods
  Meteor.methods({
    checkCode: function(courseId, pageId, UserId, codeToTest) {
      var fs = Npm.require('fs');

      var filePath = process.env.PWD + "/usersCodes/" +
        courseId + "/" + pageId +
        "/" + UserId + "/";

      fs.writeFileSync(filePath + Pages.findOne(pageId).startupFileName,
        codeToTest,
        'utf8');

      Meteor.call('runCode', "javac " + filePath + "*.java -d . ");
      Meteor.call('runCode', "java Fasade.TestFasade");
    },

    prepareStructure: function(courseId, UserId) {
      var fs = Npm.require('fs');

      console.log(UserId);
      var pages = Pages.find({
        "ownerId": courseId
      }).fetch();
      for (var i = 0; i < pages.length; i++) {
        Meteor.call('runCode', "mkdir -p " + process.env.PWD +
          "/usersCodes/" + courseId +
          "/" + pages[i]._id + "/" + UserId + "/");

        var command;
        var filePath = process.env.PWD + "/usersCodes/" +
          courseId + "/" + pages[i]._id +
          "/" + UserId + "/";
        var tmpName;

        for (var j = 0; j < pages[i].files.length; j++) {
          tmpName = pages[i].files[j].fileName;
          fs.writeFileSync(filePath + tmpName,
            pages[i].files[j].fileCode,
            'utf8');
        }

        // fs.writeFileSync(filePath + pages[i].startupFileName,
        //   pages[i].startupCode,
        //   'utf8');

        console.log(command);
        Meteor.call(command);
      }
    },

    runCode: function(userCode) {
      // Load future from fibers
      var Future = Npm.require("fibers/future");
      // Load exec
      var exec = Npm.require("child_process").exec;

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
    },
    
  });
});
