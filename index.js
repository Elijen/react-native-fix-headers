var fs = require('fs');
var path = require('path');
var glob = require('glob');
var xcode = require('xcode');


glob('node_modules/**/ios/**/*.xcodeproj/project.pbxproj', {}, function(err, files) {
  files.map(function(file){
    var xcodeProject = xcode.project(file);
    xcodeProject.parse(function(){
      console.log('Adding headers to ' + file);
      var podsPath = path.resolve(__dirname, 'ios/Pods/Headers/Public');
      xcodeProject.addToHeaderSearchPaths(podsPath);
      fs.writeFileSync(file, xcodeProject.writeSync());
    });
  });
});