/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/users', require('./api/user'));
  app.use('/api/blog', require('./api/blog'));

  //var multer = require('multer');
  //var fs = require('fs');
  //var fileTooLarge = false;
  //app.use( multer({
  //    dest: '../public/assets/img/uploads/',
  //    limits: {
  //      fileSize: 500000
  //    },
  //    rename: function (fieldname, filename, req, res) {
  //      var username = req.user.username;
  //      return username + '001';
  //    },
  //    onFileSizeLimit: function (file) {
  //      fileTooLarge = true;
  //      res.json({
  //        uploadError: 'Upload failed. File must be less than 500 KB'
  //      });
  //    },
  //    onFileUploadStart: function (file) {
  //      console.log(file.originalname + ' is starting ...');
  //    },
  //    onFileUploadComplete: function (file, req, res) {
  //      console.log(file.fieldname + ' uploaded to  ' + file.path);
  //      var newFileName = req.files.file[0].name;
  //      if(!fileTooLarge) {
  //        articles.uploadUserImage(req, res, newFileName, function() {
  //          file.path = 'http://<myblobstorage>.blob.core.windows.net/userpictures/' + newFileName;
  //          //file param is actually an object with the path as a property
  //          res.send(file);
  //          //delete file from local uploads folder
  //          fs.unlink('packages/theme/public/assets/img/uploads/' + newFileName);
  //        });
  //      } else {
  //        fs.unlink('packages/theme/public/assets/img/uploads/' + newFileName);
  //      }
  //    }
  //  }
  //) );
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
