/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');
var Schema = mongoose.Schema;
var Grid = require('gridfs-stream');
var conn = mongoose.connection;

var fs = require('fs');

var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;

//conn.once('open', function () {
//  console.log('open');
//  var gfs = Grid(conn.db);
//
//  // streaming to gridfs
//  //filename to store in mongodb
//  var writestream = gfs.createWriteStream({
//    filename: 'mongo_file.txt'
//  });
//  fs.createReadStream('/home/etech/sourcefile.txt').pipe(writestream);
//
//  writestream.on('close', function (file) {
//    // do something with `file`
//    console.log(file.filename + 'Written To DB');
//  });
//});
// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
	console.error('MongoDB connection error: ' + err);
	process.exit(-1);
	}
);
// Populate DB with sample data
//if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = module.exports = express();
var server = require('http').createServer(app);

// load static content before routing takes place
app.use(express["static"](__dirname + "/public"));

require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app


