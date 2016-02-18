/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /users              ->  index
 * POST    /users              ->  create
 * GET     /users/:id          ->  show
 * PUT     /users/:id          ->  update
 * DELETE  /users/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var User = require('./user.model.js');

exports.uploadFile = function(req, res) {
  // We are able to access req.files.file thanks to
  // the multiparty middleware
  console.log("request", req.body, "request file", req.file);
  res.status(204).end("Profile image uploaded");
}

// create a new user
var newUser = User({
  name: 'Miodrag Pavković',
  avatar: 'svg-1',
  title: 'CEO',
  img: 'app/images/team/mio2.jpg',
  description: 'Full stack developer',
  info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
});

// Get list of things
exports.index = function(req, res) {
  User.find(function (err, users) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(users);
  });
};

// Get a single thing
exports.show = function(req, res) {
 User.findById(req.params.id, function (err, user) {
    if(err) { return handleError(res, err); }
    if(!user) { return res.status(404).send('Not Found'); }
    return res.json(user);
  });
};


exports.create = function(req, res) {
  User.create(req.query, function(err, user) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(user);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  User.findById(req.params.id, function (err, user) {
    if (err) { return handleError(res, err); }
    if(!user) { return res.status(404).send('Not Found'); }
    var updated = _.merge(user, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(thing);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  User.findById(req.query.id, function (err, user) {
    if(err) { return handleError(res, err); }

    if(!user) { return res.status(404).send('Not Found'); }
    user.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}


