/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Blog = require('../api/blog/blog.model');
Blog.create({
    title:  "MIo",
    author: "MIo",
    body:   "MIo",
  //  comments: [{ body: String, date: Date }],
  //  date: { type: Date, default: Date.now },
  //  hidden: Boolean,
  //  meta: {
  //    votes: Number,
  //    favs:  Number
  //  }
  });
  User.find({}).remove(function() {
  User.create({
    name: 'Miodrag Pavković',
    avatar: 'svg-1',
    title: 'CEO',
    img: 'app/images/team/mio2.jpg',
    description: 'Full stack developer',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name: 'Miroslav Pavković',
    avatar: 'svg-2',
    title: 'Technical Team Lead',
    img: 'app/images/team/miroslav.jpg',
    description: 'Java expert',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name: 'Vania Toperich',
    avatar: 'svg-3',
    title: 'Administrator',
    img: 'app/images/team/vanja.jpg',
    description: 'Linux and network expert',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name: 'Radoslav Mirkov',
    avatar: 'svg-4',
    title: 'Software Architect',
    img: 'app//images/team/radojica.jpg',
    description: 'Java expert',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name: 'Nemanja Karanović ',
    avatar: 'svg-5',
    title: 'QA manager',
    img: 'app/images/team/nemanja.jpg',
    description: 'Senior tester developer',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name: 'Aleksandar Krompić',
    avatar: 'svg-6',
    title: 'Software Developer',
    img: 'app/images/team/krompa.jpg',
    description: 'C# expert',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});
