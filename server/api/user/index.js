'use strict';

var express = require('express'),
 multer  = require('multer'),
 router = module.exports = express.Router(),
// Requires controller
 controller = require('./user.controller.js');
// Requires multiparty
//var multiparty = require('multiparty'),
//  multipartyMiddleware = multiparty();

router.use(function(req, res, next) {
  // log each request to the console
  console.log(req.method, req.url);
  // continue doing what we were doing and go to the route
  next();
});

//router.post('/profile', upload.single('avatar'), function (req, res, next) {
//  // req.file is the `avatar` file
//  // req.body will hold the text fields, if there were any
//  console.log("tests", req.body) // form fields
//  console.log(req.files
// ) // form files
//  res.status(204).end()
//})

var fs = require('fs');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/profile/img/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage }).single('file');
//router.post('/profile', upload, function (req, res, next) {
//   console.log('file', req.file);
//  res.end("File uploaded");
//});
router.post('/profile',upload, controller.uploadFile);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/', controller.destroy);
// make router available in our Node applications
module.exports = router;

// Example endpoint
