/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /blog              ->  index
 * POST    /blog              ->  create
 * GET     /blog/:id          ->  show
 * PUT     /blog/:id          ->  update
 * DELETE  /blog/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Blog = require('./blog.model');

// Get list of things
exports.index = function(req, res) {
  Blog.find(function (err, blogs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(blogs);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Blog.findById(req.params.id, function (err, blog) {
    if(err) { return handleError(res, err); }
    if(!blog) { return res.status(404).send('Not Found'); }
    return res.json(blog);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Blog.create(req.body, function(err, blog) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(blog);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Blog.findById(req.params.id, function (err, blog) {
    if (err) { return handleError(res, err); }
    if(!blog) { return res.status(404).send('Not Found'); }
    var updated = _.merge(blog, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(blog);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Blog.findById(req.params.id, function (err, blog) {
    if(err) { return handleError(res, err); }
    if(!blog) { return res.status(404).send('Not Found'); }
    blog.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
