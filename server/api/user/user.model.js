'use strict';
// grab the things we need
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// Create a User schema
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  avatar: String,
  title: String,
  img: String,
  description: String,
  skills : Array,
  contact : Array,
  active: Boolean
});
// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users
UserSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude';

  return this.name
}
// the schema is useless so far
// we need to create a model using it
var User =  mongoose.model('User', UserSchema);
// make this available to our users in our Node applications
module.exports = User
